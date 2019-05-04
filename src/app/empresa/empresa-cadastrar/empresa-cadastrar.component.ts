import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl
} from '@angular/forms';
import { EmpresaService, AlertService } from '../../_services/index';
import { appConfig } from '../../app.config';


@Component({
  selector: 'app-empresa-cadastrar',
  templateUrl: './empresa-cadastrar.component.html',
})
export class EmpresaCadastrarComponent implements OnInit, OnDestroy {

  formEmpresa: FormGroup;       
  empresaModel: any = {};

  constructor(
    private empresaService: EmpresaService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validacaoFormulario();
  }

  ngOnDestroy(): void {
    this.empresaModel = {};
  }

  validacaoFormulario() {
    this.formEmpresa = this.formBuilder.group({
      nome: ['', Validators.required]
     });
  }

  salvar() {
    this.empresaService.cadastrarEmpresa(this.formEmpresa.value)
      .subscribe(data => {

        this.alertService.success(appConfig.mensagem_sucesso, true);
        this.ngOnDestroy();

      }, error => {

        this.alertService.error(appConfig.mensagem_erro, false);

      });
  }

}
