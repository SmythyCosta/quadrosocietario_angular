import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './layout/full-layout.component';

export const appRoutes: Routes = [
    {   
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children:[
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'empresas', loadChildren: './empresa/empresa.module#EmpresaModule' },
            { path: 'socios', loadChildren: './socio/socio.module#SocioModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutes { }
