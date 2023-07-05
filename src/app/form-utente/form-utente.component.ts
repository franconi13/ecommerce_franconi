import { Component, OnInit } from "@angular/core";
import { Utente } from "../model/utente";
import { AuthService } from "../servizi/auth.service";
import { UtenteCrudService } from "../servizi/utente-crud.service";
import { Ruolo } from "../model/ruolo";
import { Account } from "../model/account";
import { Router } from "@angular/router";
@Component({
  selector: "app-form-utente",
  templateUrl: "./form-utente.component.html",
  styleUrls: ["./form-utente.component.css"],
})
export class FormUtenteComponent implements OnInit {

  token!: string;
  message!: string;
  utente: Utente = new Utente();
  ruoli: Ruolo[] = [];
  account!:Account;
  ruolo!:Ruolo;
  currentAccount!: string;
  codiceUtenteFound!: string;

  constructor(private auth: AuthService, private utenteService: UtenteCrudService, private router: Router) { }

  ngOnInit(): void {
    this.currentAccount = this.auth.currentAccount;
    this.token = this.auth.token;
    this.utenteService.getRoles().subscribe(((ruoli: Ruolo[]) => {
      this.ruoli = ruoli;
      this.message = "";
    }));

  }

  addUser(utente: Utente): void {
    this.utenteService.addUser(utente).subscribe((message: string) => {
      this.message = message;
    });
  }

  updateUser(utente: Utente): void {
    this.utenteService.updateUser(utente).subscribe((message: string) => {
      this.message = message;
    });
  }

  getUser(id: number): any {
    this.utenteService.getUser(id).subscribe((utenteObs: Utente) => { this.utente = utenteObs })
  }

  onSearch(): void {
    this.utente = this.getUser(this.utente.id);
  }

  resetMessage(): void {
    this.message = "";
  }

  onSubmit(): void {
    this.addUser(this.utente);
    this.router.navigate(['tabUsers']);
    this.utente = new Utente();
  }
}
