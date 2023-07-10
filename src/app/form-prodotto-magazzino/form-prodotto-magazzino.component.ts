import { Component, OnInit } from "@angular/core";
import { ProdottoMagazzino } from "../model/prodotto-magazzino";
import { ProdottoCrudService } from "../servizi/prodotto-crud.service";

@Component({
  selector: "app-form-prodotto-magazzino",
  templateUrl: "./form-prodotto-magazzino.component.html",
  styleUrls: ["./form-prodotto-magazzino.component.css"],
})
export class FormProdottoMagazzinoComponent implements OnInit {
  prodottoMagazzino: ProdottoMagazzino = new ProdottoMagazzino();
  message!: string;

  constructor(private crud: ProdottoCrudService) {}

  ngOnInit(): void {}

  addIntoMagazzino(prodMag: ProdottoMagazzino): void {
    this.crud.addProdottoMagazzino(prodMag).subscribe((message: string) => {
      this.message = message;
    });
  }

  resetMessage(): void{
    this.message = "";
  }
}
