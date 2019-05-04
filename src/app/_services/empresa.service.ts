import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment as env } from '../../environments/environment';


@Injectable()
export class EmpresaService {

    constructor(private http: Http) { }

    /**
     * Lista todas as empresas 
     * @return json 
     */
    getEmpresas() {
        return this.http.get(env.baseApiUrl + 'empresas')
                        .map((response: Response) => response.json());
    }

    /**
     * Lista um empresa por id
     * @return json 
     */
    getEmpresa(id) {
        return this.http.get(env.baseApiUrl + 'empresas/'+id)
                        .map((response: Response) => response.json());
    }

    /**
     * Cadastra uma nova empresa
     * @param json 
     */
    cadastrarEmpresa(data) {
        return this.http.post(env.baseApiUrl + 'empresas', data);
    }

    /**
     * atualizar empresa
     * @param json 
     */
    atualizarEmpresa(id, data){
        return this.http.put(env.baseApiUrl + 'empresas/'+id, data);
    }

    /**
     * Deleta uma empresa
     * @param id_empresa 
     */
    deletarEmpresa(id){
        return this.http.delete(env.baseApiUrl + 'empresas/'+ id);
    }

    /**
     * Exibe os Socios pro empresa
     * @param idEmpresa 
     */
    getSociosPorEmpresa(idEmpresa) {
        return this.http.get(env.baseApiUrl + 'empresas'+'/'+ idEmpresa + '/socios')
                            .map((response: Response) => response.json());
    }

}
