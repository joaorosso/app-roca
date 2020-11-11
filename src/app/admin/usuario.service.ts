import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';
import { MoneyHttp } from '../seguranca/money-http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private usuarioUrl = environment.apiUrl + '/usuario';

  constructor(private http: MoneyHttp) {}

  salvar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuarioUrl, usuario);
  }

  update(usuario: Usuario): Observable<Usuario[]> {
    return this.http.put<Usuario[]>(this.usuarioUrl + `/${usuario.id}`, usuario);
  }

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioUrl);
  }

  getById(usuarioId: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuarioUrl + `/${usuarioId}`);
  }

  removeUser(usuarioId: string): Observable<any> {
    return this.http.delete(this.usuarioUrl + `/${usuarioId}`);
  }
}
