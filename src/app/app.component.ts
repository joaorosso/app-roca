import { AuthService } from './seguranca/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { LogoutService } from './seguranca/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLogged = false;
  username: string;

  constructor(
    private logoutService: LogoutService,
    private toastyConfig: ToastyConfig,
    private toastyService: ToastyService,
    private router: Router,
    public auth: AuthService
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  ngOnInit(): void {
    this.username = this.auth.jwtPayload?.user_name;
  }

  exibindoNavbar() {
    return this.router.url !== '/login';
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.toastyService.error(erro));
  }
}
