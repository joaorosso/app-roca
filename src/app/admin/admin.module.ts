import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminComponent, UsuarioComponent],
  exports: [AdminComponent, UsuarioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule {}
