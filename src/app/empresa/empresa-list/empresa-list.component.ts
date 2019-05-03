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

    titlePage:String = "Empresas";
    countJson:number;

    listEmpresas: Object[];

    constructor(
        public router: Router,
        private http: Http,
        private empresaService:EmpresaService
    ) {}

    ngOnInit() {
        this.ListarEmpresas();
    }

    ListarEmpresas() {
		this.empresaService.getEmpresas()
			.subscribe( data => {
                this.listEmpresas = data.empresa;
                
                console.log('JSON com lista de empresas')
                console.log(this.listEmpresas);
			});
    }
    
    deletarEmpresa(id, nome) {
		let result = confirm("Tem certeza que deseja excluir " + nome + " ?");
		if (result) {
			this.empresaService.deletarEmpresa(id)
				.subscribe(data => {				
                    //this.alertService.success(data.mesg, true);
                    this.ngOnInit();
				},error =>{

                    console.log('Erro ao excluir dado')
					
					// if (appConfig.exibir_erros_Backend) {
					// 	this.alertService.error(error);
					// } else {
					// 	this.alertService.error(appConfig.mensagem_erro_sisAdmin);
					// }

				});
		}
	}

    
    
}
