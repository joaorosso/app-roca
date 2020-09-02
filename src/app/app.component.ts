import { Component } from '@angular/core';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';
import { LogoutService } from './seguranca/logout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private logoutService: LogoutService,
    private toastyConfig: ToastyConfig,
    private toastyService: ToastyService,
    private router: Router
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.toastyService.error(erro));
  }
}
