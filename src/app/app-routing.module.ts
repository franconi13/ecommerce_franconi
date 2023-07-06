import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormUtenteComponent } from "./form-utente/form-utente.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProdottoComponent } from "./prodotto/prodotto.component";
import { TabellaProdComponent } from "./tabella-prod/tabella-prod.component";
import { ModificaProdComponent } from "./modifica-prod/modifica-prod.component";
import { FormFornitoreComponent } from "./form-fornitore/form-fornitore.component";
import { ModificaUtenteComponent } from "./modifica-utente/modifica-utente.component";
import { TabellaUtentiComponent } from "./tabella-utenti/tabella-utenti.component";
import { TabellaFornitoriComponent } from "./tabella-fornitori/tabella-fornitori.component";
import { ModificaFornitoreComponent } from "./modifica-fornitore/modifica-fornitore.component";
import { RouteGuardService } from "./route-guard.service";

const routes: Routes = [
  { path: "modifyUser/:id", component: ModificaUtenteComponent },
  { path: "modifyForn/:id", component: ModificaFornitoreComponent},
  { path: "login", component: LoginComponent },
  { path: "tab", component: TabellaProdComponent },
  { path: "insert", component: ProdottoComponent },
  { path: "modify/:id", component: ModificaProdComponent },
  { path: "insertUtente", component:FormUtenteComponent },
  { path: "insertForn", component:FormFornitoreComponent},
  { path: "tabUsers", component:TabellaUtentiComponent},
  { path: "tabForn", component:TabellaFornitoriComponent},
  { path: "", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
