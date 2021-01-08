import { ToastyService } from 'ng2-toasty';
import { DespesasService } from './despesas.service';
import { RocasService } from './../modules/rocas/rocas.service';
import { Component, OnInit } from '@angular/core';
import { Despesa } from '../models/despesa';
import { ActivatedRoute } from '@angular/router';
import { Roca } from '../models/roca';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from '../seguranca/auth.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.scss'],
})
export class DespesasComponent implements OnInit {
  despesas: Despesa[];
  roca: Roca;
  total: number;
  rocaId: string;
  modalRef: BsModalRef;
  loading: any = {};

  constructor(
    private route: ActivatedRoute,
    private rocasService: RocasService,
    private despesasService: DespesasService,
    private modalService: BsModalService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.rocaId = this.route.snapshot.params.rocaId;
    this.total = 0;
    this.getRoca();
    this.getDespesas();
  }

  getRoca() {
    this.rocasService.getRoca(this.rocaId).subscribe((roca) => {
      this.roca = roca;
    });
  }

  getDespesas() {
    this.loading.init = true;
    this.despesasService.getDespesas(this.rocaId).subscribe((despesas) => {
      this.despesas = despesas;
      this.getTotal();
      this.loading.init = false;
    });
  }

  getTotal() {
    this.despesas.forEach((despesa) => {
      this.total += despesa.total;
    });
  }

  downloadPdf() {
    this.loading.download = true;
    this.despesasService.downloadPdf(this.rocaId).subscribe((data) => {
      const url: any = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.download = 'relatorio-despesas.pdf';
      a.click();
      this.loading.download = false;
    });
  }

  downloadExcel() {
    this.loading.download = true;
    this.despesasService.downloadExcel(this.rocaId).subscribe((data) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.download = 'planilha-despesas.xlsx';
      a.click();
      this.loading.download = false;
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
