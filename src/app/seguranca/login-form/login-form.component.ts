import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;

  constructor(
    public auth: AuthService,
    private formBuilder: FormBuilder,
    private toastyService: ToastyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loading = true;
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password)
      .then(() => {
        this.router.navigate(['/inicio']);
      })
      .catch(erro => {
        this.toastyService.error(erro);
      }).finally(() => this.loading = false);
  }
}
