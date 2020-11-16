import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permissao } from '../models/permissao';
import { MoneyHttp } from '../seguranca/money-http';

@Injectable({
  providedIn: 'root',
})
export class PermissaoService {
  private permissaoUrl = environment.apiUrl + '/permissao';

  constructor(private http: MoneyHttp) {}

  getAll(): Observable<Permissao[]> {
    return this.http.get<Permissao[]>(this.permissaoUrl);
  }
}
