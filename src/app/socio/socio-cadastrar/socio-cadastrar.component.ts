import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl
} from '@angular/forms';
import { SocioService, AlertService } from '../../_services/index';
import { appConfig } from '../../app.config';


@Component({
  selector: 'app-socio-cadastrar',
  templateUrl: './socio-cadastrar.component.html',
  styleUrls: ['./socio-cadastrar.component.css']
})
export class SocioCadastrarComponent implements OnInit {

  formSocio: FormGroup;       
  socioModel: any = {};

  constructor(
    private socioService: SocioService,
    private alertService: AlertService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.validacaoFormulario();
  }

  ngOnDestroy(): void {
    this.socioModel = {};
  }

  validacaoFormulario() {
    this.formSocio = this.formBuilder.group({
      nome: ['', Validators.required],
      empresa_id: ['', Validators.required]
     });
  }

  salvar() {
    this.socioService.cadastrarSocio(this.formSocio.value)
      .subscribe(data => {
        
        this.alertService.success(appConfig.mensagem_sucesso, true);
        this.ngOnDestroy();

      }, error => {

        this.alertService.error(appConfig.mensagem_erro, false);

      });
  }

}
