import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Roca } from '../../models/roca';
import { environment } from './../../../environments/environment';
import { AppHttp } from '../../seguranca/app-http';

@Injectable({
  providedIn: 'root'
})
export class RocasService {

  private rocasUrl = environment.apiUrl + '/rocas';

  constructor(
    private http: AppHttp
  ) { }

  getRocas(status: string): Observable<Roca[]> {
    let url = this.rocasUrl;
    if (status) {
      url += `?status=${status}`;
    }
    return this.http.get<Roca[]>(url)
      .pipe(
        tap(_ => this.log('fetched roças')),
        catchError(this.handleError<Roca[]>('getRocas', []))
      );
  }

  getRoca(id: string): Observable<Roca> {
    const url = `${this.rocasUrl}/${id}`;
    return this.http.get<Roca>(url)
      .pipe(
        tap(_ => this.log(`fetched roca id=${id}`)),
        catchError(this.handleError<Roca>(`getHero id=${id}`))
      );
  }

  salvaRoca(roca: Roca): Observable<Roca> {
    return this.http.post<Roca>(this.rocasUrl, roca)
      .pipe(
        catchError(this.handleError('addRoca', roca))
      );
  }

  remove(rocaId: string): Observable<any> {
    return this.http.delete(this.rocasUrl + `/${rocaId}`)
      .pipe(
        catchError(this.handleError('remove roca', rocaId))
      );
  }

  removeAll(ids: string[]): Observable<any> {
    return this.http.delete(this.rocasUrl, {body: ids});
  }

  fechaRoca(roca: Roca): Observable<any> {
    roca.fechado = !roca.fechado;
    return this.http.put(this.rocasUrl + `/${roca.id}`, roca)
      .pipe(
        catchError(this.handleError('fecha roca', roca))
      );
  }

  abreRoca(roca: Roca): Observable<any> {
    roca.fechado = roca.fechado;
    return this.http.put(this.rocasUrl + `/${roca.id}`, roca)
      .pipe(
        catchError(this.handleError('fecha roca', roca))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  private log(test) {
    return test;
  }
}
