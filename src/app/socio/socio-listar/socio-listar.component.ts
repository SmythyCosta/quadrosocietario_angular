import { Component, OnInit } from '@angular/core';
import { SocioService, AlertService } from '../../_services/index';
import { Socio } from '../../_models/index';
import { appConfig } from '../../app.config';

@Component({
  selector: 'app-socio-listar',
  templateUrl: './socio-listar.component.html',
  styleUrls: ['./socio-listar.component.css']
})
export class SocioListarComponent implements OnInit {

  socios: Array<Socio>;
  countJson:number;
  loading: boolean; // para o load.

  constructor(
    private socioService: SocioService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.ListarSocio();
  }

  ListarSocio() {
    this.loading = true;
    this.socioService.getSocios()
      .subscribe(data => {
        this.socios = data;
        this.countJson = this.lengthJson(this.socios);

        setTimeout(() => {
          this.loading = false;
        }, 300 );

        // console.log('JSON com lista de socios')
        // console.log(this.socios);
      });
  }

  deletarSocio(id, nome) {
    let result = confirm("Tem certeza que deseja excluir " + nome + " ?");
    if (result) {
      this.socioService.deletarSocio(id)
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
