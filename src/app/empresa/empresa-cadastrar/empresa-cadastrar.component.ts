import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl
} from '@angular/forms';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { EmpresaService, AlertService } from '../../_services/index';
import { appConfig } from '../../app.config';


@Component({
  selector: 'app-empresa-cadastrar',
  templateUrl: './empresa-cadastrar.component.html',
  styleUrls: ['./empresa-cadastrar.component.css']
})
export class EmpresaCadastrarComponent implements OnInit, OnDestroy {


  formEmpresa: FormGroup;          // para validar o formulario.
  empresaModel: any = {};      // para os dados deste model.

  constructor(
    private http: Http,
    private router: Router,
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

        
        //this.ngOnInit();
        this.alertService.success(appConfig.mensagem_sucesso, true);
        this.ngOnDestroy();

      }, error => {

        this.alertService.error(appConfig.mensagem_erro, false);


        // if (appConfig.exibir_erros_Backend) {
        //     this.alertService.error(error);
        // } else {
        //     this.alertService.error(appConfig.mensagem_erro);
        // }


      });
  }

}
