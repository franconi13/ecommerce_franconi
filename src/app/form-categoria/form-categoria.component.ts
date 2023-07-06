import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CrudService } from '../model/crud.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.css']
})
export class FormCategoriaComponent implements OnInit{

  categoria: Categoria = new Categoria();
  message!: string;

  constructor(private crud: CrudService) {}

  ngOnInit(): void {}

  aggiungiCategoria(categoria: Categoria): void{
    this.crud.addCategoria(categoria).subscribe((message: string) => {
      this.message = message;
    })
  }

  onSubmit(): void{
    this.aggiungiCategoria(this.categoria);
    this.categoria = new Categoria();
  }

}
