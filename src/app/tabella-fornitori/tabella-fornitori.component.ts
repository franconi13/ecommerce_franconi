import { Component, OnInit } from '@angular/core';
import { Utente } from '../model/utente';
import { Fornitore } from '../model/fornitore';
import { FornitoreCrudService } from '../servizi/fornitore-crud.service';

@Component({
  selector: 'app-tabella-fornitori',
  templateUrl: './tabella-fornitori.component.html',
  styleUrls: ['./tabella-fornitori.component.css']
})
export class TabellaFornitoriComponent implements OnInit {

  fornitori: Fornitore[] = [];
  message!: string;
  token!:string;
  page!:number;
  nPagine!:number;
  currentFornitore!:string;

  constructor(private fornitoreCrud: FornitoreCrudService){}

  ngOnInit(): void {
    this.page = 0;
    this.getFornitoriImpaginati(this.page);
  }

  deleteFornitore(fornitore: Fornitore): void {
    let confirmation = confirm('Conferma la cancellazione del fornitore');
    if (confirmation) {
      this.fornitoreCrud.deleteFornitore(fornitore.id).subscribe((message: string) => {
        this.message = message;
        this.getFornitoriImpaginati(this.page);
      });
    }
  }

  getFornitoriImpaginati(page:number): void{
    this.fornitoreCrud.getFornitoriDim().subscribe((dim:number)=>{
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
    this.fornitoreCrud.getFornitori(this.page).subscribe((fornitori:Fornitore[])=>{
      this.fornitori = fornitori;
      this.message = "";
    })
    if(this.fornitori.length==0){
      this.nPagine = this.nPagine-1;
    }
  }
}
