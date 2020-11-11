import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Usuario } from '../models/usuario';
import { ConfirmationDialogComponent } from '../shared/confirmation-dialog/confirmation-dialog.component';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  loading: any = {};
  usuarios: any[];
  modalRef: BsModalRef;

  constructor(
    private usuarioService: UsuarioService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.loading.init = true;
    this.usuarioService.getAll().subscribe((result) => {
      this.usuarios = result;
      this.loading.init = false;
    });
  }

  remover(usuario: Usuario): void {
    const initialState = {
      title: `Apagar usuário ${usuario.nome}?`,
    };
    this.modalRef = this.modalService.show(ConfirmationDialogComponent, {
      class: 'modal-sm',
      initialState,
    });
    this.modalRef.content.onClose.subscribe((result) => {
      if (result) {
        this.removeUser(usuario.id);
      }
    });
  }

  removeUser(id: string) {
    this.usuarioService.removeUser(id).subscribe(() => this.getUsuarios());
  }

  isUserAdmin(usuario: Usuario) {
    return usuario.permissoes.some(
      (permissao) => permissao.code === 'ROLE_ADMIN'
    );
  }
}
