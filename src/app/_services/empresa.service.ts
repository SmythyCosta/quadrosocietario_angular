import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment as env } from '../../environments/environment';


@Injectable()
export class EmpresaService {

    api_url = 'http://localhost/quadrosocietario-symfony/api-socios-empresa/web/api/v1';
    appi = 'http://localhost/quadrosocietario-symfony/api-socios-empresa/web/api/v1/empresas/';

    constructor(private http: Http) { }

    /**
     * Lista todas as empresas 
     * @return json 
     */
    getEmpresas() {
        // let headers = new Headers({'Content-Type': 'application/json'}); {headers:headers}
        return this.http.get(env.baseApiUrl + 'empresas')
                        .map((response: Response) => response.json());
    }

    /**
     * Lista um empresa por id
     * @return json 
     */
    getEmpresa(id) {
        return this.http.get(this.api_url+'/'+id).map((response: Response) => response.json());
    }

    /**
     * Cadastra uma nova empresa
     * @param json 
     */
    cadastrarEmpresa(data) {
        return this.http.post(this.api_url+'/empresas/', data);
    }

    /**
     * atualizar empresa
     * @param json 
     */
    atualizarEmpresa(data){
        return this.http.put(this.api_url+'/empresas/', data);
    }

    /**
     * Deleta uma empresa
     * @param id_empresa 
     */
    deletarEmpresa(id){
        return this.http.delete(env.baseApiUrl + 'empresas/'+ id);
    }

}
