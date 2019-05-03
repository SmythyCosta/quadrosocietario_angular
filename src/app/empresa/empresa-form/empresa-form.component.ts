import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Http } from '@angular/http';
import { EmpresaService } from '../../_services/empresa.service';

@Component({
    selector: 'app-empresa-form',
    templateUrl: './empresa-form.component.html',
    styleUrls: ['./empresa-form.component.css']
})
export class EmpresaFormComponent {

    titlePage:String = "Empresa";
    titleBarNavegation:String = "Add";

    listEmpresas: Object[];
    
    constructor(
        public  router: Router,
        private routeParams: ActivatedRoute,
        private http:Http,
        private empresaService:EmpresaService
    ) {}


    ListarEmpresas() {
		this.empresaService.getEmpresas()
			.subscribe( data => {
                this.listEmpresas = data.empresa;
                
                console.log(this.listEmpresas);
			});
	}

    
    
}