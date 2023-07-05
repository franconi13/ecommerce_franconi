import { Component, OnInit } from '@angular/core';
import { Ruolo } from '../model/ruolo';
import { Utente } from '../model/utente';
import { UtenteCrudService } from '../servizi/utente-crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../model/account';

@Component({
  selector: 'app-modifica-utente',
  templateUrl: './modifica-utente.component.html',
  styleUrls: ['./modifica-utente.component.css']
})
export class ModificaUtenteComponent implements OnInit{

  message!: string;
  ruoli:Ruolo[] = [];
  idUtente!: number;
  utente: Utente = new Utente();
  token!: string;
  codiceUtenteFound!: string;

  constructor(private utenteService: UtenteCrudService, private activatedRoute: ActivatedRoute, private router: Router){}

ngOnInit(): void {
  this.idUtente = this.activatedRoute.snapshot.params['id'];
  this.utenteService.getUser(this.idUtente).subscribe((utente: Utente) => {
    this.utente = utente;
  });
  this.getRuoli();
}

getRuoli(): void{
  this.utenteService.getRoles().subscribe((ruoli: Ruolo[]) => {
    this.ruoli = ruoli;
  });
}

onSubmit(utente: Utente): void {
  this.utenteService.addUser(this.utente).subscribe((message: string) => {
    this.message = message;
  });
  this.router.navigate(['tabUsers']);
}

}
