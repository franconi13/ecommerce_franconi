import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Prodotto } from '../model/prodotto';
import { Account } from '../model/account';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogged = false;
  token!:string;

  uri: string = 'http://localhost:8080';
  currentAccount!:string;

  constructor(private http: HttpClient) { }

  loginUser(account: Account): Observable<string> {
    this.currentAccount = account.username;
    return this.http.post<string>(`${this.uri}/getLoginToken`, account)
  }

  isUserLoggedIn(): boolean{
    if(this.token == "Admin" || this.token == "User"){
      this.isUserLogged = true;
    }
    return this.isUserLogged;
  }

}
