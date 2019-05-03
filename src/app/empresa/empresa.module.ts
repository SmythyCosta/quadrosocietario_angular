import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { EmpresaListComponent }    from './empresa-list/empresa-list.component';
import { EmpresaFormComponent }    from './empresa-form/empresa-form.component';
import { EmpresaRoutes }           from './empresa-routes';
import { EmpresaService, AlertService }          from '../_services/index';
import { DirectivasModule } from '../_directives/directives.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DirectivasModule,
        EmpresaRoutes
    ],
    declarations: [EmpresaListComponent, EmpresaFormComponent],
    providers:[EmpresaService, AlertService]
})
export class EmpresaModule { }
