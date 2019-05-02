import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { EmpresaService } from '../../_services/empresa.service';

@Component({
    selector: 'app-empresa-list',
    templateUrl: './empresa-list.component.html',
    styleUrls: ['./empresa-list.component.css']
})
export class EmpresaListComponent {

    public titlePage:String = "Category";
    public countJson:number;

    constructor(
        public router: Router,
        private http: Http,
        private dataService: EmpresaService
    ) {}

    
    
}
