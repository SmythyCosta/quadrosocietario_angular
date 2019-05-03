import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocioCadastrarComponent } from './socio-cadastrar/socio-cadastrar.component';
import { SocioEditarComponent } from './socio-editar/socio-editar.component';
import { SocioListarComponent } from './socio-listar/socio-listar.component';
import { SocioRoutes } from './empresa-routes';

@NgModule({
  imports: [
    CommonModule,
    SocioRoutes
  ],
  declarations: [
    SocioCadastrarComponent, 
    SocioEditarComponent, 
    SocioListarComponent
  ]
})
export class SocioModule { }
