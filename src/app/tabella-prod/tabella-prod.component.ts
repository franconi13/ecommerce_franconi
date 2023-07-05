import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../model/prodotto';
import { CrudService } from '../model/crud.service';
import { AuthService } from '../servizi/auth.service';

@Component({
  selector: 'app-tabella-prod',
  templateUrl: './tabella-prod.component.html',
  styleUrls: ['./tabella-prod.component.css'],
})
export class TabellaProdComponent implements OnInit {
  prodotti: Prodotto[] = [];
  message!: string;
  token!:string;
  page!:number;
  nPagine!:number;
  currentProduct!:string;

  constructor(private crud: CrudService) {}

/*    getProdotti(): void {
    this.crud.getProduct(this.page).subscribe((prodotti: Prodotto[]) => {
      this.prodotti = prodotti;
    });
  } */

  ngOnInit(): void {
    this.page = 0;
    this.getProductsPaged(this.page);
  }

  deleteProdotto(prodotto: Prodotto): void {
    let confirmation = confirm('Conferma la cancellazione del prodotto');
    if (confirmation) {
      this.crud.deleteProduct(prodotto.id).subscribe((message: string) => {
        this.message = message;
        this.getProductsPaged(this.page);
      });
    }
  }

  getProductsPaged(page:number):void{
    this.crud.getProductsDim().subscribe((dim:number)=>{
      this.nPagine = Math.round(dim/5);
    })
    if(page<0){
      this.page = 0;
    }
    else if(page>this.nPagine){
      this.page = this.nPagine;
    }
    else{
      this.page = page;
    }
    this.crud.getProduct(this.page).subscribe((prodotti:Prodotto[])=>{
      this.prodotti = prodotti;
      this.message = "";
    })
    if(this.prodotti.length==0){
      this.nPagine = this.nPagine-1;
    }
  }
}
