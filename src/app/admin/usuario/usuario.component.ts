import { Permissao } from './../../models/permissao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastyService } from 'ng2-toasty';
import { PermissaoService } from 'src/app/admin/permissao.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  form: FormGroup;
  userId: string;
  loading: boolean;
  permissoes: Permissao[];
  permissoesSelecionadas: Permissao[] = [];
  permissaoBtn = [];

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private permissaoService: PermissaoService,
    private toastyService: ToastyService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;

    this.getPermissoes();
    this.getUser();
    this.form = this.fb.group({
      id: [],
      nome: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      permissoes: []
    });
  }

  getUser() {
    if (this.userId) {
      this.usuarioService.getById(this.userId).subscribe(
        (data) => this.form.patchValue(data),
        (err) => this.toastyService.error(err)
      );
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      if (this.isEdit) {
        this.update();
      } else {
        this.save();
      }
    }
  }

  save() {
    this.usuarioService.salvar(this.form.value).subscribe(
      () => this.router.navigate(['/admin']),
      (err) => this.toastyService.error(err)
    );
  }

  update() {
    this.usuarioService.update(this.form.value).subscribe(
      () => this.router.navigate(['/admin']),
      (err) => this.toastyService.error(err)
    );
  }

  getPermissoes() {
    this.permissaoService.getAll().subscribe((result) => {
      this.permissoes = result;
    });
  }

  get isEdit() {
    return Boolean(this.form.get('id').value);
  }
}
