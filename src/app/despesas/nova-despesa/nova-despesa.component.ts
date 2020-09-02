import { ToastyService } from 'ng2-toasty';
import { DespesasService } from './../despesas.service';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nova-despesa',
  templateUrl: './nova-despesa.component.html',
  styleUrls: ['./nova-despesa.component.scss']
})
export class NovaDespesaComponent implements OnInit {
  rocaId: string;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private despesasService: DespesasService,
    private router: Router,
    private route: ActivatedRoute,
    private toastyService: ToastyService
  ) {}

  ngOnInit() {
    this.rocaId = this.route.snapshot.params.rocaId;
    this.form = this.fb.group({
      rocaId: this.rocaId,
      data: new Date(),
      descricao: ['', Validators.required],
      quantidade: [0, Validators.required],
      valorUnitario: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.despesasService.salvar(this.form.value)
        .subscribe(
          () => this.router.navigate(['/despesas', this.rocaId]),
          err => this.toastyService.error(err.error.message)
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
