import { RocasModule } from './rocas/rocas.module';
import { LucroModule } from './lucro/lucro.module';
import { AdminModule } from './admin/admin.module';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MoneyHttp } from './seguranca/money-http';
import { SegurancaModule } from './seguranca/seguranca.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import localeBr from '@angular/common/locales/pt';
import { ToastyModule } from 'ng2-toasty';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { GridComponent } from './shared/grid/grid.component';
import { TestComponent } from './test/test.component';
import { DespesasModule } from './despesas/despesas.module';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    GridComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SegurancaModule,
    MatTableModule,
    MatCheckboxModule,
    ToastyModule.forRoot(),
    ModalModule.forRoot(),
    AdminModule,
    DespesasModule,
    LucroModule,
    RocasModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }, MoneyHttp],
  bootstrap: [AppComponent],
})
export class AppModule {}
