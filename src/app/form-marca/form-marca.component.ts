import { Component, OnInit } from '@angular/core';
import { CrudService } from '../model/crud.service';
import { Marca } from '../model/marca';

@Component({
  selector: 'app-form-marca',
  templateUrl: './form-marca.component.html',
  styleUrls: ['./form-marca.component.css']
})
export class FormMarcaComponent implements OnInit{

  marca: Marca = new Marca();
  message!: string;
  constructor(private crud: CrudService){}

  ngOnInit(): void {}

  aggiungiMarca(marca: Marca): void{
    this.crud.addMarca(marca).subscribe((message: string) => {
      this.message = message;
    })
  }

  onSubmit(): void {
    this.aggiungiMarca(this.marca);
    this.marca = new Marca();
  }

}
