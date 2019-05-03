import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocioListarComponent } from './socio-listar/socio-listar.component';
import { SocioCadastrarComponent } from './socio-cadastrar/socio-cadastrar.component';
import { SocioEditarComponent } from './socio-editar/socio-editar.component';


const socioRoutes: Routes = [
    { path: '', component: SocioListarComponent },
    { path: 'cadastrar', component: SocioCadastrarComponent }, 
    { path: 'editar/:id', component: SocioEditarComponent },
];

@NgModule({
    imports: [RouterModule.forChild(socioRoutes)],
    exports: [RouterModule]
})
export class SocioRoutes { }
