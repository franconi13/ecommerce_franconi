export class TipoListino {
  id: number;
  tipoListino: string;
  descrizione: string;
  dataCreazione: string;

  constructor() {
    this.id = 0;
    this.tipoListino = '';
    this.descrizione = '';
    this.dataCreazione = '';
  }
}
