import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Lucro } from '../models/lucro';
import { AppHttp } from '../seguranca/app-http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LucroService {
  private lucrosUrl = environment.apiUrl + '/lucros';

  constructor(
    private http: AppHttp
  ) {}

  getLucros(rocaId): Observable<Lucro[]> {
    const url = `${this.lucrosUrl}/roca/${rocaId}`;
    return this.http.get<Lucro[]>(url);
  }

  getLucro(lucroId): Observable<Lucro> {
    const url = `${this.lucrosUrl}/${lucroId}`;
    return this.http.get<Lucro>(url);
  }

  salvar(lucro: Lucro): Observable<Lucro> {
    return this.http.post<Lucro>(this.lucrosUrl, lucro);
  }

  update(lucro: Lucro): Observable<Lucro> {
    return this.http.put<Lucro>(this.lucrosUrl + `/${lucro.id}`, lucro);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(this.lucrosUrl + `/${id}`);
  }

  downloadPdf(rocaId: string): Observable<any> {
    return this.http.get(this.lucrosUrl + `/report/${rocaId}`, {
      responseType: 'blob',
    });
  }

  downloadExcel(rocaId: string): Observable<any> {
    return this.http.get(this.lucrosUrl + `/excel/${rocaId}`, {
      responseType: 'blob',
    });
  }
}
