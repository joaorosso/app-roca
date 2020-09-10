import { LucroService } from './../lucro.service';
import { ToastyService } from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales, defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-novo-lucro',
  templateUrl: './novo-lucro.component.html',
  styleUrls: ['./novo-lucro.component.scss'],
})
export class NovoLucroComponent implements OnInit {
  locale = 'pt-br';
  locales = listLocales();

  rocaId: string;
  form: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private lucroService: LucroService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private bsLocaleService: BsLocaleService
  ) {
    this.bsLocaleService.use(this.locale);
  }

  ngOnInit() {
    this.rocaId = this.route.snapshot.params.rocaId;
    this.form = this.fb.group({
      rocaId: this.rocaId,
      data: new Date(),
      descricao: ['', Validators.required],
      quantidade: [0, Validators.required],
      valorUnitario: [0, Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loading = true;
      this.lucroService.salvar(this.form.value).subscribe(
        () => this.router.navigate(['/lucros', this.rocaId]),
        (err) => this.toastyService.error(err.error.message)
      );
    }
  }

  total(): number {
    return this.quantidade * this.valorUnitario;
  }

  get quantidade(): number {
    return this.form.get('quantidade').value;
  }

  get valorUnitario(): number {
    return this.form.get('valorUnitario').value;
  }
}
