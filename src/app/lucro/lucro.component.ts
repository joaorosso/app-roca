import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Lucro } from '../models/lucro';
import { LucroService } from './lucro.service';
import { Roca } from '../models/roca';
import { RocasService } from '../modules/rocas/rocas.service';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from '../seguranca/auth.service';

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
  loading: any = {};

  constructor(
    private route: ActivatedRoute,
    private rocasService: RocasService,
    private lucroService: LucroService,
    private modalService: BsModalService,
    public auth: AuthService
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
    this.loading.init = true;
    this.lucroService.getLucros(this.rocaId)
    .subscribe(lucros => {
      this.lucros = lucros;
      this.loading.init = false;
    });
  }

  downloadPdf() {
    this.loading.download = true;
    this.lucroService.downloadPdf(this.rocaId).subscribe((data) => {
      const url: any = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.download = 'relatorio-vendas.pdf';
      a.click();
      this.loading.download = false;
    });
  }

  downloadExcel() {
    this.loading.download = true;
    this.lucroService.downloadExcel(this.rocaId).subscribe((data) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.download = 'planilha-vendas.xlsx';
      a.click();
      this.loading.download = false;
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
