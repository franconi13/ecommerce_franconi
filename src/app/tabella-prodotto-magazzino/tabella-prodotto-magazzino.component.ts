import { Component, OnInit } from '@angular/core';
import { ProdottoCrudService } from '../servizi/prodotto-crud.service';
import { ProdottoMagazzino } from '../model/prodotto-magazzino';

@Component({
  selector: 'app-tabella-prodotto-magazzino',
  templateUrl: './tabella-prodotto-magazzino.component.html',
  styleUrls: ['./tabella-prodotto-magazzino.component.css']
})
export class TabellaProdottoMagazzinoComponent implements OnInit {


  constructor(private magazzinoCrud: ProdottoCrudService) { }

  ngOnInit(): void {
    this.page = 0;
    this.getMagazzinoPag(this.page)
  }

  magazzino: ProdottoMagazzino[] = [];
  message!: string;
  page!: number;
  nPagine!: number;

  getMagazzinoPag(page: number): void {
    this.magazzinoCrud.getMagazzinoDim().subscribe((dim: number) => {
      this.nPagine = Math.round(dim / 5);
    })
    if (page < 0) {
      this.page = 0;
    }
    else if (page > this.nPagine) {
      this.page = this.nPagine;
    }
    else {
      this.page = page;
    }
    this.magazzinoCrud.getMagazzinoPaged(this.page).subscribe((magazzinoProdotti: ProdottoMagazzino[]) => {
      this.magazzino = magazzinoProdotti;
      this.message = "";
    })
    if (this.magazzino.length == 0) {
      this.nPagine = this.nPagine - 1;
    }
  }

  deleteProdotto(prodotto: ProdottoMagazzino): void {
    let confirmation = confirm('Conferma la cancellazione del prodotto');
    if (confirmation) {
      this.magazzinoCrud.deleteProdottoMagazzino(prodotto.id).subscribe((message: string) => {
        this.message = message;
        this.getMagazzinoPag(this.page);
      });
    }
  }

}
