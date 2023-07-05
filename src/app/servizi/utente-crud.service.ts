import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utente } from '../model/utente';
import { Ruolo } from '../model/ruolo';

@Injectable({
  providedIn: 'root'
})
export class UtenteCrudService {

  uri: string = 'http://localhost:8080';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  addUser(utente: Utente): Observable<string> {
    return this.http.post<string>(`${this.uri}/upsertUtente`, utente);
  }

  getUsers(page:number):Observable<Utente[]>{
    return this.http.get<Utente[]>(`${this.uri}/getUtenti/${page}`)
  }

  deleteUser(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteUtente/${id}`)
  }

  updateUser(utente:Utente):Observable<string>{
    return this.http.post<string>(`${this.uri}/upsertUtente`, utente)
  }

  getRoles():Observable<Ruolo[]>{
    return this.http.get<Ruolo[]>(`${this.uri}/getRuoli`)
  }

  getUser(id:number):Observable<Utente>{
    return this.http.get<Utente>(`${this.uri}/getUtente/${id}`)
  }

  getUsersDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getSizeUtenti`)
  }
}
