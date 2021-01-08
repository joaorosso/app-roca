import { Component, OnInit } from '@angular/core';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';

import { LogoutService } from './seguranca/logout.service';
import { AuthService } from './seguranca/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(
    private logoutService: LogoutService,
    private toastyConfig: ToastyConfig,
    private toastyService: ToastyService,
    private router: Router,
    public auth: AuthService
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  ngOnInit() {
    this.isLoggedIn$ = this.auth.isLoggedIn;
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.toastyService.error(erro));
  }
}
