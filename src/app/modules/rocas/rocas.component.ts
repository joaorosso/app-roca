import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Roca } from '../../models/roca';
import { RocasService } from './rocas.service';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-rocas',
  templateUrl: './rocas.component.html',
  styleUrls: ['./rocas.component.scss'],
})
export class RocasComponent implements OnInit {
  rocas: Roca[];
  modalRef: BsModalRef;
  status: string;
  loading: boolean;
  balance = 0;

  constructor(
    private rocasService: RocasService,
    private modalService: BsModalService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
    this.getRocasAbertas();
  }

  getRocasAbertas() {
    this.status = 'ABERTO';
    this.getRocas('ABERTO');
  }

  getRocasFechadas() {
    this.status = 'FECHADO';
    this.getRocas('FECHADO');
  }

  getRocasTodas() {
    this.status = 'TODAS';
    this.getRocas();
  }

  getRocas(status: string = null) {
    this.loading = true;
    this.rocasService.getRocas(status).subscribe((rocas) => {
      this.getBalance(rocas);
      this.rocas = rocas;
      this.loading = false;
    });
  }

  getBalance(rocas: Roca[]) {
    let balance = 0;
    rocas.forEach(roca => {
      balance += roca.lucro - roca.despesa;
    });
    this.balance = balance;
  }

  remover(roca: Roca) {
    const initialState = {
      title: `Apagar a roça ${roca.descricao}?`,
    };
    this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
      class: 'modal-sm',
      initialState,
    });
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.removeRoca(roca.id);
      }
    });
  }

  fechar(roca: Roca) {
    const initialState = {
      title: `Fechar a roça ${roca.descricao}?`,
    };
    this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
      class: 'modal-sm',
      initialState,
    });
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.fechaRoca(roca);
      }
    });
  }

  abrir(roca: Roca) {
    const initialState = {
      title: `Abrir a roça ${roca.descricao}?`,
    };
    this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
      class: 'modal-sm',
      initialState,
    });
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.abreRoca(roca);
      }
    });
  }

  removeRoca(rocaId: string) {
    this.rocasService.remove(rocaId).subscribe(() => this.getRocas());
  }

  fechaRoca(roca: Roca) {
    this.rocasService.fechaRoca(roca).subscribe(() => this.getRocas());
  }

  abreRoca(roca: Roca) {
    this.rocasService.fechaRoca(roca).subscribe(() => this.getRocas());
  }
}
