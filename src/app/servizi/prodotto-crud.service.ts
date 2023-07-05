import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdottoMagazzino } from '../model/prodotto-magazzino';

@Injectable({
  providedIn: 'root'
})
export class ProdottoCrudService {

  uri: string = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  //Inserimento
  addProdottoMagazzino(prodottoMagazzino:ProdottoMagazzino): Observable<string>{
    return this.http.post<string>(`${this.uri}/upsertProdottoMagazzino`, prodottoMagazzino);
  }

  //Visualizza Uno
  getProdottoMagazzino(id:number):Observable<ProdottoMagazzino>{
    return this.http.get<ProdottoMagazzino>(`${this.uri}/getProdottoMagazzino/${id}`)
  }

  //Visualizza Prodotti impaginati
  getMagazzinoPaged(page:number):Observable<ProdottoMagazzino[]>{
    return this.http.get<ProdottoMagazzino[]>(`${this.uri}/getProdottiMagazzino/${page}`)
  }

  //Cancella Prodotto
  deleteProdottoMagazzino(id:number): Observable<string>{
    return this.http.delete<string>(`${this.uri}/deleteProdottoMagazzino/${id}`)
  }

  scaricoProdotto(prodottoMagazzino:ProdottoMagazzino): Observable<string> {
    return this.http.post<string>(`${this.uri}/scaricoProdotto`, prodottoMagazzino)
  }

  //Visualizzazione Impaginazione
  getMagazzinoDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getSizeProdottoMagazzino`)
  }
}
