import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpresaRoutes } from './empresa-routes';
import { EmpresaService, AlertService } from '../_services/index';
import { DirectivasModule } from '../_directives/directives.module';

import { EmpresaListarComponent } from './empresa-listar/empresa-listar.component';
import { EmpresaCadastrarComponent } from './empresa-cadastrar/empresa-cadastrar.component';
import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { SharedModule } from '../_shared/shared.module';
import { NgSpinKitModule } from 'ng-spin-kit';
import { EmpresaExibeSociosComponent } from './empresa-exibe-socios/empresa-exibe-socios.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivasModule,
    SharedModule,
    NgSpinKitModule, //load
    EmpresaRoutes
  ],
  declarations: [
    EmpresaListarComponent,
    EmpresaCadastrarComponent,
    EmpresaEditarComponent,
    EmpresaExibeSociosComponent
  ],
  providers: [EmpresaService, AlertService]
})
export class EmpresaModule { }
