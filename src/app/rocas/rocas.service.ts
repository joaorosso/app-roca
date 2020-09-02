import { environment } from './../../environments/environment';
import { MoneyHttp } from './../seguranca/money-http';
import { Injectable } from '@angular/core';

import { MessageService } from '../message.service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Roca } from '../models/roca';

@Injectable({
  providedIn: 'root'
})
export class RocasService {

  private rocasUrl = environment.apiUrl + '/rocas';

  constructor(
    private http: MoneyHttp,
    private messageService: MessageService
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

  getRoca(id: number): Observable<Roca> {
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

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`InicioService: ${message}`);
  }
}
