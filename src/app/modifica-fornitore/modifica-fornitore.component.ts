import { Component, OnInit } from '@angular/core';
import { Fornitore } from '../model/fornitore';
import { FornitoreCrudService } from '../servizi/fornitore-crud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-fornitore',
  templateUrl: './modifica-fornitore.component.html',
  styleUrls: ['./modifica-fornitore.component.css']
})
export class ModificaFornitoreComponent implements OnInit{

  idFornitore!: number;
  message!: string;
  fornitore: Fornitore = new Fornitore();

  constructor(private fornitoreService: FornitoreCrudService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.idFornitore = this.activatedRoute.snapshot.params['id'];
    this.fornitoreService.getFornitore(this.idFornitore).subscribe((fornitore: Fornitore) => {
      this.fornitore = fornitore;
    });
  }

  onSubmit(fornitore: Fornitore): void {
    this.fornitoreService.addFornitore(this.fornitore).subscribe((message: string) => {
      this.message = message;
    });
    this.router.navigate(['tabForn']);
  }
}
