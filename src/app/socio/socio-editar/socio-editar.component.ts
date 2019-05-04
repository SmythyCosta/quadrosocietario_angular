import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { SocioService, EmpresaService, AlertService } from '../../_services/index';
import { appConfig } from '../../app.config';
import { Socio } from '../../_models/index';

@Component({
  selector: 'app-socio-editar',
  templateUrl: './socio-editar.component.html'
})
export class SocioEditarComponent implements OnInit {

  formSocio: FormGroup;
  socioModel: Socio;
  id: number;
  listEmpresas: Object[] = [];

  constructor(
    private router: Router,
    private routeParams: ActivatedRoute,
    private socioService: SocioService,
    private empresaService: EmpresaService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.socioModel = new Socio();
    this.selectEmpresas();
    this.checkIssetID();
    this.validacaoFormulario();
  }

  validacaoFormulario() {
    this.formSocio = this.formBuilder.group({
      nome: ['', Validators.required],
      empresa_id: ['', Validators.required]
    });
  }

  selectEmpresas() {
    this.empresaService.getEmpresas()
      .subscribe(data => {
        this.listEmpresas = data.empresas;

        // console.log('listando empresas');
        // console.log(data);
      });
  }

  checkIssetID() {
    this.routeParams.params.forEach((params: Params) => {
      this.id = +params['id'];
      if (this.id) {
        this.detalheSocio(this.id);
      } else {
        this.router.navigate(['/socios']);
        // if (error.status == 404) {
        //   this.alertService.error('Empresa não encontrada', false);
        // }
      }
    });
  }

  detalheSocio(id) {
    this.socioService.getSocio(id)
      .subscribe(data => {
        this.socioModel = data;
      }, error => {
        this.router.navigate(['/socios']);
      });
  }

  salvar() {
    this.formSocio.patchValue({ id: this.id });
    this.socioService.atualizarSocio(this.id, this.formSocio.value)
      .subscribe(data => {
        this.alertService.success(appConfig.mensagem_sucesso, true);
      }, error => {
        this.alertService.error(appConfig.mensagem_erro, false);
      });
  }

}
