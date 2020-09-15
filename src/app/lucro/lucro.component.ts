import { Component, OnInit } from '@angular/core';
import { Lucro } from '../models/lucro';
import { LucroService } from './lucro.service';
import { ActivatedRoute } from '@angular/router';
import { Roca } from '../models/roca';
import { RocasService } from '../rocas/rocas.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-lucro',
  templateUrl: './lucro.component.html',
  styleUrls: ['./lucro.component.scss']
})
export class LucroComponent implements OnInit {
  lucros: Lucro[];
  roca: Roca;
  total: number;
  totalDespesas: number;
  lucro: number;
  rocaId: string;
  modalRef: BsModalRef;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private rocasService: RocasService,
    private lucroService: LucroService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.rocaId = this.route.snapshot.params.rocaId;
    this.total = 0;
    this.totalDespesas = 0;
    this.getRoca();
    this.getLucros();
  }

  getRoca() {
    this.rocasService.getRoca(this.rocaId)
      .subscribe(roca => {
        this.roca = roca;
      });
  }

  getLucros(): void {
    this.loading = true;
    this.lucroService.getLucros(this.rocaId)
    .subscribe(lucros => {
      this.lucros = lucros;
      this.loading = false;
    });
  }

  remover(lucro: Lucro): void {
    const initialState = {
      title: `Apagar lucro ${lucro.descricao}?`,
    };
    this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
      class: 'modal-sm',
      initialState,
    });
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.removeLucro(lucro.id);
      }
    });
  }

  removeLucro(id: string) {
    this.lucroService.remove(id).subscribe(() => this.getLucros());
  }
}
