import { Component, OnInit } from '@angular/core';
import { EmpresaService, SocioService, AlertService } from '../../_services/index';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { appConfig } from '../../app.config';
import { Empresa, Socio } from '../../_models/index';


@Component({
  selector: 'app-empresa-exibe-socios',
  templateUrl: './empresa-exibe-socios.component.html',
  styleUrls: ['./empresa-exibe-socios.component.css']
})
export class EmpresaExibeSociosComponent implements OnInit {

  //socios: Array<Socio>;
  empresa: Empresa;
  countJson:number;
  id: number;       // ParamURL
  socios:Object[];

  constructor(
    private router: Router,
    private routeParams: ActivatedRoute,
    private empresaService: EmpresaService,
    private socioService: SocioService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.empresa = new Empresa();
    this.checkIssetID();
    
  }

  checkIssetID() {
    this.routeParams.params.forEach((params: Params) => {
      this.id = +params['id'];
      if (this.id) {
        this.detalheEmpresa(this.id);
        this.ListarSocios(this.id);
      } else {
        this.router.navigate(['/condominio']);
      }
    });
  }

  detalheEmpresa(id) {
    this.empresaService.getEmpresa(id)
      .subscribe(data => {
        this.empresa = data.empresa;
      }, error => {

        // if (error.status == 404) {
        //   this.alertService.error('Empresa não encontrada', false);
        // }

        this.router.navigate(['/empresas']);
      });
  }
  
  ListarSocios(id) {
    this.empresaService.getSociosPorEmpresa(id)
      .subscribe(data => {
        this.socios = data.socios;
        this.countJson = this.lengthJson(this.socios);

        console.log('JSON com lista de socios')
        console.log(this.socios);
      });
  }

  lengthJson(obj) {
    //count elements
    return Object.keys(obj).length;
  }

}
