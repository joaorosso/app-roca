import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permissao } from '../models/permissao';
import { AppHttp } from '../seguranca/app-http';

@Injectable({
  providedIn: 'root',
})
export class PermissaoService {
  private permissaoUrl = environment.apiUrl + '/permissao';

  constructor(private http: AppHttp) {}

  getAll(): Observable<Permissao[]> {
    return this.http.get<Permissao[]>(this.permissaoUrl);
  }
}
