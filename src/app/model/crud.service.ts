import { Injectable } from '@angular/core';
import { Prodotto } from './prodotto';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';
import { Marca } from './marca';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  uri: string = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  addProduct(prodotto: Prodotto): Observable<string> {
    return this.http.post<string>(`${this.uri}/upsertProdotto`, prodotto);
  }

  getProduct(page:number): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(`${this.uri}/getProdotti/${page}`);
  }

  deleteProduct(id: number | null): Observable<string> {
    return this.http.delete<string>(`${this.uri}/deleteProdotto/${id}`);
  }

  updateProduct(prodotto: Prodotto): Observable<string> {
    return this.http.post<string>(
      `${this.uri}/upsertProdotto/${prodotto.id}`,
      prodotto
    );
  }

  getCategorie(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.uri}/getCategorie`);
  }

  getMarche(): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.uri}/getMarche`);
  }

  getUsersIdServ(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>(`${this.uri}/getProdotto/${id}`);
  }

  getProductsDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getSize`)
  }

}
