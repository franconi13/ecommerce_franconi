export class Utente {
  id: number;
  nome: string;
  cognome: string;
  cf: string;
  dataNascita: string;
  email: string;
  telefono: string;
  codiceUtente: string;
  username: string;
  password: string;
  nomeRuolo: string;
  //idAccount:number;

  constructor() {
    this.id = 0;
    this.nome = '';
    this.cognome = '';
    this.cf = '';
    this.dataNascita = '';
    this.email = '';
    this.telefono = '';
    this.codiceUtente = '';
    this.username = '';
    this.password = '';
    this.nomeRuolo = '';
    //this.idAccount = 0;
  }
}
