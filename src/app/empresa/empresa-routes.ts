import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';


const empresaRoutes: Routes = [
    { path: '', component: EmpresaListComponent },
    { path: 'form', component: EmpresaFormComponent },
    { path: 'form/:id', component: EmpresaFormComponent }
];


@NgModule({
    imports: [RouterModule.forChild(empresaRoutes)],
    exports: [RouterModule]
})
export class EmpresaRoutes { }
