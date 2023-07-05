export class ProdottoMagazzino {
  id: number;
  dataMovimento: string;
  tipoMovimento: string;
  prezzoAcquisto: number;
  prezzoVendita: number;
  quantita: string;

  constructor() {
    this.id = 0;
    this.dataMovimento = '';
    this.tipoMovimento = '';
    this.prezzoAcquisto = 0;
    this.prezzoVendita = 0;
    this.quantita = '';
  }
}
