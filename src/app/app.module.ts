import { MatTableModule } from '@angular/material/table';
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
import { DespesasComponent } from './despesas/despesas.component';
import { LucroComponent } from './lucro/lucro.component';
import { registerLocaleData } from '@angular/common';
import { RocasComponent } from './rocas/rocas.component';
import { NovaRocaComponent } from './rocas/nova-roca/nova-roca.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { NovaDespesaComponent } from './despesas/nova-despesa/nova-despesa.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NovoLucroComponent } from './lucro/novo-lucro/novo-lucro.component';
import { GridComponent } from './shared/grid/grid.component';
import { TestComponent } from './test/test.component';
import { PrintComponent } from './print/print.component';
import { AdminComponent } from './admin/admin.component';
import { UsuarioComponent } from './admin/usuario/usuario.component';
import { NgSelectModule } from '@ng-select/ng-select';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    DespesasComponent,
    LucroComponent,
    RocasComponent,
    NovaRocaComponent,
    ConfirmationDialogComponent,
    NovaDespesaComponent,
    NovoLucroComponent,
    GridComponent,
    TestComponent,
    PrintComponent,
    AdminComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SegurancaModule,
    MatTableModule,
    ToastyModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MoneyHttp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
