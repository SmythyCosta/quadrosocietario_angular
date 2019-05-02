import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { EmpresaListComponent }    from './empresa-list/empresa-list.component';
import { EmpresaFormComponent }    from './empresa-form/empresa-form.component';
import { EmpresaRoutes }           from './empresa-routes';
import { EmpresaService }          from '../_services/empresa.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        EmpresaRoutes
    ],
    declarations: [EmpresaListComponent, EmpresaFormComponent],
    providers:[EmpresaService]
})
export class EmpresaModule { }
