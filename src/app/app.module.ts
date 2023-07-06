import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, NgModel } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormUtenteComponent } from "./form-utente/form-utente.component";
import { FormFornitoreComponent } from "./form-fornitore/form-fornitore.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProdottoComponent } from "./prodotto/prodotto.component";
import { CrudService } from "./model/crud.service";
import { HttpClientModule } from "@angular/common/http";
import { TabellaProdComponent } from "./tabella-prod/tabella-prod.component";
import { ModificaProdComponent } from "./modifica-prod/modifica-prod.component";
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';
import { ModificaFornitoreComponent } from './modifica-fornitore/modifica-fornitore.component';
import { TabellaUtentiComponent } from './tabella-utenti/tabella-utenti.component';
import { TabellaFornitoriComponent } from './tabella-fornitori/tabella-fornitori.component';
import { FormProdottoMagazzinoComponent } from './form-prodotto-magazzino/form-prodotto-magazzino.component';
import { TabellaProdottoMagazzinoComponent } from './tabella-prodotto-magazzino/tabella-prodotto-magazzino.component';
import { FormMarcaComponent } from './form-marca/form-marca.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUtenteComponent,
    HomeComponent,
    LoginComponent,
    ProdottoComponent,
    TabellaProdComponent,
    ModificaProdComponent,
    FormFornitoreComponent,
    ModificaUtenteComponent,
    ModificaFornitoreComponent,
    TabellaUtentiComponent,
    TabellaFornitoriComponent,
    FormProdottoMagazzinoComponent,
    TabellaProdottoMagazzinoComponent,
    FormMarcaComponent,
    FormCategoriaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [CrudService],
  bootstrap: [AppComponent],
})
export class AppModule {}
