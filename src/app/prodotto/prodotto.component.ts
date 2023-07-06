import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { CrudService } from '../model/crud.service';
import { Categoria } from '../model/categoria';
import { Marca } from '../model/marca';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css'],
})
export class ProdottoComponent implements OnInit {
  prodotto: Prodotto = new Prodotto();
  categorie: Categoria[] = [];
  marche: Marca[] = [];
  message!: string;

  constructor(private crud: CrudService, private router: Router) {}

  checked = false;
  toggleChecked() {
    this.checked = !this.checked;
  }

  addProdotto(prodotto: Prodotto): void {
    this.crud.addProduct(prodotto).subscribe((message: string) => {
      this.message = message;
    });
  }

  resetMex(): void {
    this.message = '';
  }

  getCategorie(): void {
    this.crud.getCategorie().subscribe((categorie: Categoria[]) => {
      this.categorie = categorie;
    });
  }

  getMarche(): void {
    this.crud.getMarche().subscribe((marche: Marca[]) => {
      this.marche = marche;
    });
  }

  onSubmit(): void {
    this.addProdotto(this.prodotto);
    this.router.navigate(['tab']);
    this.prodotto = new Prodotto(); //svuota i campi del form e crea nello stesso tempo una nuova istanza
  }

  ngOnInit(): void {
    this.getCategorie();
    this.getMarche();
  }
}
