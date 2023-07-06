import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { Marca } from '../model/marca';
import { CrudService } from '../model/crud.service';
import { Prodotto } from '../model/prodotto';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifica-prod',
  templateUrl: './modifica-prod.component.html',
  styleUrls: ['./modifica-prod.component.css'],
})
export class ModificaProdComponent implements OnInit {
  categorie: Categoria[] = [];
  prodotto: Prodotto = new Prodotto();
  marche: Marca[] = [];
  message!: string;
  idProdotto!: number;

  constructor(
    private crud: CrudService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idProdotto = this.activatedRoute.snapshot.params['id'];
    this.crud
      .getUsersIdServ(this.idProdotto)
      .subscribe((prodotto: Prodotto) => {
        this.prodotto = prodotto;
      });
    this.getMarche();
    this.getCategorie();
  }

  getMarche(): void {
    this.crud.getMarche().subscribe((marche: Marca[]) => {
      this.marche = marche;
    });
  }

  getCategorie(): void {
    this.crud.getCategorie().subscribe((categorie: Categoria[]) => {
      this.categorie = categorie;
    });
  }

  onSubmit(prodotto: Prodotto): void {
    this.crud.addProduct(this.prodotto).subscribe((message: string) => {
      this.message = message;
    });
    this.router.navigate(['tab']);
  }

}
