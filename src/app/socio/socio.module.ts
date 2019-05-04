import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SocioCadastrarComponent } from './socio-cadastrar/socio-cadastrar.component';
import { SocioEditarComponent } from './socio-editar/socio-editar.component';
import { SocioListarComponent } from './socio-listar/socio-listar.component';
import { SocioService, AlertService } from '../_services/index';
import { SocioRoutes } from './socio-routes';
import { DirectivasModule } from '../_directives/directives.module';
import { SharedModule } from '../_shared/shared.module';
import { NgSpinKitModule } from 'ng-spin-kit';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivasModule,
    SharedModule,
    NgSpinKitModule, //load
    SocioRoutes
  ],
  declarations: [
    SocioCadastrarComponent,
    SocioEditarComponent,
    SocioListarComponent
  ],
  providers: [SocioService, AlertService]
})
export class SocioModule { }
