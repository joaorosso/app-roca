import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Lucro } from '../models/lucro';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LucroService {
  private lucrosUrl = environment.apiUrl + 'lucros';

  constructor(
    private http: MoneyHttp
  ) {}

  getLucros(rocaId): Observable<Lucro[]> {
    const url = `${this.lucrosUrl}/roca/${rocaId}`;
    return this.http.get<Lucro[]>(url);
  }

  salvar(lucro: Lucro): Observable<Lucro> {
    return this.http.post<Lucro>(this.lucrosUrl, lucro);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(this.lucrosUrl + `/${id}`);
  }
}
