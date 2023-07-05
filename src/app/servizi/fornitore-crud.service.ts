import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fornitore } from '../model/fornitore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornitoreCrudService {

  uri: string = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  addFornitore(fornitore: Fornitore): Observable<string> {
    return this.http.post<string>(`${this.uri}/upsertFornitore`, fornitore);
  }

  getFornitori(page:number):Observable<Fornitore[]>{
    return this.http.get<Fornitore[]>(`${this.uri}/getFornitori/${page}`)
  }

  deleteFornitore(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteFornitore/${id}`)
  }

  updateFornitore(fornitore:Fornitore):Observable<string>{
    return this.http.post<string>(`${this.uri}/upsertFornitore`, fornitore)
  }

  getFornitore(id:number):Observable<Fornitore>{
    return this.http.get<Fornitore>(`${this.uri}/getFornitore/${id}`)
  }

  getFornitoriDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getSize`)
  }
}
