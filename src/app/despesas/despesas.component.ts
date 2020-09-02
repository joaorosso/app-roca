import { DespesasService } from './despesas.service';
import { RocasService } from './../rocas/rocas.service';
import { Component, OnInit } from '@angular/core';
import { Despesa } from '../models/despesa';
import { ActivatedRoute } from '@angular/router';
import { Roca } from '../models/roca';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss']
})
export class DespesasComponent implements OnInit {
  despesas: Despesa[];
  roca: Roca;
  total: number;
  rocaId: number;
  modalRef: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private rocasService: RocasService,
    private despesasService: DespesasService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.rocaId = this.route.snapshot.params.rocaId;
    this.total = 0;
    this.getRoca();
    this.getDespesas();
  }

  getRoca() {
    this.rocasService.getRoca(this.rocaId)
      .subscribe(roca => {
        this.roca = roca;
      });
  }

  getDespesas() {
    this.despesasService.getDespesas(this.rocaId)
    .subscribe(despesas => {
      this.despesas = despesas;
      this.getTotal();
    });
  }

  getTotal() {
    this.despesas.forEach(despesa => {
      this.total += despesa.total;
    });
  }

  remover(despesa: Despesa): void {
    const initialState = {
      title: `Apagar despesa ${despesa.descricao}?`,
    };
    this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
      class: 'modal-sm',
      initialState,
    });
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.removeLucro(despesa.id);
      }
    });
  }

  removeLucro(id: string) {
    this.despesasService.remove(id).subscribe(() => this.getDespesas());
  }
}
