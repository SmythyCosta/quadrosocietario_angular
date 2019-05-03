import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { EmpresaService, AlertService } from '../../_services/index';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent implements OnInit {

  titlePage: String = "Empresas";
  countJson: number;

  listEmpresas: Object[];

  constructor(
    public router: Router,
    private http: Http,
    private empresaService: EmpresaService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.ListarEmpresas();
  }

  ListarEmpresas() {
    this.empresaService.getEmpresas()
      .subscribe(data => {
        this.listEmpresas = data.empresas;

        //console.log('JSON com lista de empresas')
        //console.log(this.listEmpresas);
      });
  }

  deletarEmpresa(id, nome) {
    let result = confirm("Tem certeza que deseja excluir " + nome + " ?");
    if (result) {
      this.empresaService.deletarEmpresa(id)
        .subscribe(data => {
          this.alertService.success('Empresa removida com sucesso.', true);
          this.ngOnInit();
          //this.ListarEmpresas();
        }, error => {
          
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