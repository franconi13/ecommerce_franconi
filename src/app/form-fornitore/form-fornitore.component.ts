import { Component, OnInit } from '@angular/core';
import { Fornitore } from '../model/fornitore';
import { FornitoreCrudService } from '../servizi/fornitore-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-fornitore',
  templateUrl: './form-fornitore.component.html',
  styleUrls: ['./form-fornitore.component.css']
})
export class FormFornitoreComponent implements OnInit {

  message!: string;
  fornitore: Fornitore = new Fornitore();
  constructor(private fornitoreService: FornitoreCrudService, private router: Router){}

  ngOnInit(): void {

  }

  addFornitore(fornitore: Fornitore): void {
    this.fornitoreService.addFornitore(fornitore).subscribe((message: string) => {
      this.message = message;
    });
  }

  updateFornitore(fornitore: Fornitore): void {
    this.fornitoreService.updateFornitore(fornitore).subscribe((message: string) => {
      this.message = message;
    });
  }

  getFornitore(id: number): any{
    this.fornitoreService.getFornitore(id).subscribe(( fornitoreObs: Fornitore) => {this.fornitore = fornitoreObs})
  }

  onSearch(): void {
    this.fornitore = this.getFornitore(this.fornitore.id);
  }

  resetMessage(): void{
    this.message = "";
  }

  onSubmit(): void {
    this.addFornitore(this.fornitore);
    this.router.navigate(['tabForn']);
    this.fornitore = new Fornitore();
  }


}






