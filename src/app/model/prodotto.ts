export class Prodotto {
  id: number | null;
  nomeProdotto: string;
  codiceProdotto: string;
  taglia: string | null;
  colore: string | null;
  nomeCategoria: string;
  nomeMarca: string;

  constructor() {
    this.id = null;
    this.nomeProdotto = "";
    this.codiceProdotto = "";
    this.taglia = null;
    this.colore = null;
    this.nomeCategoria = "";
    this.nomeMarca = "";
  }
}
