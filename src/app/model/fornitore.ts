export class Fornitore {
  id: number;
  nomeAzienda: string;
  codiceFornitore: string;
  partitaIva: string;
  codiceFiscale: string;
  telAziendale: string;
  cellFornitore: string;
  codiceFatturazione: string;
  pec: string;

  constructor() {
    this.id = 0;
    this.nomeAzienda = '';
    this.codiceFornitore = '';
    this.partitaIva = '';
    this.codiceFiscale = '';
    this.telAziendale = '';
    this.cellFornitore = '';
    this.codiceFatturazione = '';
    this.pec = '';
  }
}
