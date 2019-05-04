import { Component, OnInit } from '@angular/core';
import { EmpresaService, AlertService } from '../../_services/index';
import { Empresa } from '../../_models/index';
import { appConfig } from '../../app.config';


@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styleUrls: ['./empresa-listar.component.css']
})
export class EmpresaListarComponent implements OnInit {

  empresas: Array<Empresa>;
  countJson:number;
  loading: boolean; // para o load.

  constructor(
    private empresaService: EmpresaService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.ListarEmpresas();
  }

  ListarEmpresas() {
    this.loading = true; 
    this.empresaService.getEmpresas()
      .subscribe(data => {
        this.empresas = data.empresas;
        this.countJson = this.lengthJson(this.empresas);
        
        setTimeout(() => {
          this.loading = false;
        }, 300 );

        // console.log('JSON com lista de empresas')
        // console.log(this.empresas);
      });
  }

  deletarEmpresa(id, nome) {
    let result = confirm("Tem certeza que deseja excluir " + nome + " ?");
    if (result) {
      this.empresaService.deletarEmpresa(id)
        .subscribe(data => {
          this.alertService.success(appConfig.mensagem_sucesso, true);
          this.ngOnInit();

        }, error => {
          
          console.log('Erro ao excluir dado');
          this.alertService.error(appConfig.mensagem_erro, true);

          // if (appConfig.exibir_erros_Backend) {
          // 	this.alertService.error(error);
          // } else {
          // 	this.alertService.error(appConfig.mensagem_erro_sisAdmin);
          // }

        });
    }
  }

  lengthJson(obj) {
    //count elements
    return Object.keys(obj).length;
  }



}