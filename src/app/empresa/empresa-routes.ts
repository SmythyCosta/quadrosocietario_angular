import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaEditarComponent } from './empresa-editar/empresa-editar.component';
import { EmpresaCadastrarComponent } from './empresa-cadastrar/empresa-cadastrar.component';
import { EmpresaListarComponent } from './empresa-listar/empresa-listar.component';
import { EmpresaExibeSociosComponent } from './empresa-exibe-socios/empresa-exibe-socios.component';

const empresaRoutes: Routes = [
    { path: '', component: EmpresaListarComponent },
    { path: 'cadastrar', component: EmpresaCadastrarComponent }, 
    { path: 'editar/:id', component: EmpresaEditarComponent },
    { path: 'exibe-socios/:id', component: EmpresaExibeSociosComponent },
];

@NgModule({
    imports: [RouterModule.forChild(empresaRoutes)],
    exports: [RouterModule]
})
export class EmpresaRoutes { }
