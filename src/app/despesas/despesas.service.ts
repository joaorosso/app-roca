import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Despesa } from '../models/despesa';
import { MoneyHttp } from '../seguranca/money-http';

@Injectable({
  providedIn: 'root',
})
export class DespesasService {
  private despesasUrl = environment.apiUrl + '/despesas';

  constructor(private http: MoneyHttp) {}

  getDespesas(rocaId): Observable<Despesa[]> {
    const url = `${this.despesasUrl}/roca/${rocaId}`;
    return this.http.get<Despesa[]>(url);
  }

  getDespesa(despesaId): Observable<Despesa> {
    const url = `${this.despesasUrl}/${despesaId}`;
    return this.http.get<Despesa>(url);
  }

  salvar(despesa: Despesa): Observable<Despesa> {
    return this.http.post<Despesa>(this.despesasUrl, despesa);
  }

  update(despesa: Despesa): Observable<Despesa> {
    return this.http.put<Despesa>(this.despesasUrl + `/${despesa.id}`, despesa);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(this.despesasUrl + `/${id}`);
  }

  download(rocaId: string): Observable<any> {
    return this.http.get(this.despesasUrl + `/report/${rocaId}`, {
      responseType: 'blob',
    });
  }
}
