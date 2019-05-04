import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment as env } from '../../environments/environment';


@Injectable()
export class SocioService {

    end_POINT = 'socios';

    constructor(private http: Http) { }

    /**
     * Lista todas os Socios 
     * @return json 
     */
    getSocios() {
        return this.http.get(env.baseApiUrl + this.end_POINT)
                        .map((response: Response) => response.json());
    }

    /**
     * Lista um socio por id
     * @return json 
     */
    getSocio(id) {
        return this.http.get(env.baseApiUrl + this.end_POINT+'/'+id)
                        .map((response: Response) => response.json());
    }

    /**
     * Cadastra um novo socio
     * @param json 
     */
    cadastrarSocio(data) {
        return this.http.post(env.baseApiUrl + this.end_POINT, data);
    }

    /**
     * atualizar socio
     * @param json 
     */
    atualizarSocio(id, data) {
        return this.http.put(env.baseApiUrl + this.end_POINT+'/'+id, data);
    }

    /**
     * Deleta um socio
     * @param id_empresa 
     */
    deletarSocio(id) {
        return this.http.delete(env.baseApiUrl + this.end_POINT+'/'+ id);
    }

}
