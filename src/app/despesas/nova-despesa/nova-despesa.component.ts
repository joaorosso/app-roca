import { ToastyService } from 'ng2-toasty';
import { DespesasService } from './../despesas.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { listLocales, defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
defineLocale('pt-br', ptBrLocale);

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.component.html',
  styleUrls: ['./nova-despesa.component.scss'],
})
export class NovaDespesaComponent implements OnInit {
  locale = 'pt-br';
  locales = listLocales();
  rocaId: string;
  despesaId: string;
  form: FormGroup;
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private despesasService: DespesasService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private bsLocaleService: BsLocaleService
  ) {
    this.bsLocaleService.use(this.locale);
  }

  ngOnInit() {
    this.rocaId = this.route.snapshot.params.rocaId;
    this.despesaId = this.route.snapshot.params.despesaId;

    this.form = this.fb.group({
      rocaId: this.rocaId,
      id: '',
      data: new Date(),
      descricao: ['', Validators.required],
      quantidade: [0, Validators.required],
      valorUnitario: [0, Validators.required],
    });

    if (this.despesaId) {
      this.getDespesa();
    }
  }

  getDespesa() {
    this.despesasService.getDespesa(this.despesaId).subscribe(
      (data) => this.mapDespesa(data),
      (err) => this.toastyService.error(err)
    );
  }

  mapDespesa(result) {
    result.data = new Date(result.data);
    this.form.patchValue(result);
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
    this.despesasService.salvar(this.form.value).subscribe(
      () => this.router.navigate(['/despesas', this.rocaId]),
      (err) => this.toastyService.error(err.error.message),
      () => (this.loading = false)
    );
  }

  update() {
    this.despesasService.salvar(this.form.value).subscribe(
      () => this.router.navigate(['/despesas', this.rocaId]),
      (err) => this.toastyService.error(err.error.message),
      () => (this.loading = false)
    );
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

  get isEdit() {
    return Boolean(this.form.get('id').value);
  }
}
