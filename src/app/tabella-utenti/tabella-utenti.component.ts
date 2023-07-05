import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/utente';
import { UtenteCrudService } from '../servizi/utente-crud.service';
import { AuthService } from '../servizi/auth.service';
import { Account } from '../model/account';
import { Ruolo } from '../model/ruolo';

@Component({
  selector: 'app-tabella-utenti',
  templateUrl: './tabella-utenti.component.html',
  styleUrls: ['./tabella-utenti.component.css']
})
export class TabellaUtentiComponent implements OnInit{

  [x: string]: any;
  utenti: Utente[] = [];
  message!: string;
  token!:string;
  page!:number;
  nPagine!:number;
  currentUtente!:string;
  ruolo!:Ruolo;
  account!:Account;


  constructor(private utenteCrudService: UtenteCrudService, private auth: AuthService) {}

  getUtenti(): void {
    this.utenteCrudService.getUsers(this.page).subscribe((utenti: Utente[]) => {
      this.utenti = utenti;
    });
  }

  deleteUtente(utente: Utente): void {
    let confirmation = confirm("Conferma la cancellazione dell'utente?");
    if (confirmation) {
      this.utenteCrudService.deleteUser(utente.id).subscribe((message: string) => {
        this.message = message;
        this.getUsersPage(this.page);
      });
    }
  }

  getUsersPage(page:number):void{
    this.utenteCrudService.getUsersDim().subscribe((dim:number)=>{
      this.nPagine = Math.round(dim/5);
    })
    if(page<0){
      this.page = 0;
    }
    else if(page>this.nPagine){
      this.page = this.nPagine;
    }
    else{
      this.page = page;
    }
    this.utenteCrudService.getUsers(this.page).subscribe((utenti:Utente[])=>{
      this.utenti = utenti;
      this.message = "";
    })
    if(this.utenti.length==0){
      this.nPagine = this.nPagine-1;
    }
  }


  ngOnInit(): void {
    this.page = 0;
    this.currentUtente = this.auth.currentAccount;
    this.token = this.auth.token;
    this.getUsersPage(this.page);
  }



}
