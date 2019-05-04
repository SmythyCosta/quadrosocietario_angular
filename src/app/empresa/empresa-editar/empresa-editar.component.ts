import { Component, OnInit } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EmpresaService, AlertService } from '../../_services/index';
import { appConfig } from '../../app.config';
import { Empresa } from '../../_models/index';

@Component({
  selector: 'app-empresa-editar',
  templateUrl: './empresa-editar.component.html',
  styleUrls: ['./empresa-editar.component.css']
})
export class EmpresaEditarComponent implements OnInit {

  formEmpresa: FormGroup;
  empresa: Empresa;
  id: number;

  constructor(
    private router: Router,
    private routeParams: ActivatedRoute,
    private empresaService: EmpresaService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.empresa = new Empresa();
    this.checkIssetID();
    this.validacaoFormulario();
  }

  checkIssetID() {
    this.routeParams.params.forEach((params: Params) => {
      this.id = +params['id'];
      if (this.id) {
        this.detalheEmpresa(this.id);
      } else {
        this.router.navigate(['/condominio']);
      }
    });
  }

  validacaoFormulario() {
    this.formEmpresa = this.formBuilder.group({
      id: [''],
      nome: ['', Validators.required]
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

  salvar() {
    this.formEmpresa.patchValue({ id: this.id });
    this.empresaService.atualizarEmpresa(this.id, this.formEmpresa.value)
      .subscribe(data => {
        this.alertService.success(appConfig.mensagem_sucesso, true);
      }, error => {
        this.alertService.error(appConfig.mensagem_erro, false);
      });
  }

}
