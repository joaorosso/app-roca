import { Router } from '@angular/router';
import { RocasService } from './../rocas.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-roca',
  templateUrl: './nova-roca.component.html',
  styleUrls: ['./nova-roca.component.scss']
})
export class NovaRocaComponent {
  form = this.fb.group({
    descricao: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private rocaService: RocasService,
    private route: Router
  ) { }

  onSubmit() {
    if (this.form.valid) {
      this.rocaService.salvaRoca(this.form.value)
        .subscribe(roca => this.route.navigate(['/inicio']));
    }
  }

}
