import { Injectable } from '@angular/core';

import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { Lucro } from '../models/lucro';
import { MoneyHttp } from '../seguranca/money-http';

@Injectable({
  providedIn: 'root'
})
export class LucroService {
  private lucrosUrl = 'http://localhost:8080/lucros';

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
