import { Component, OnInit } from "@angular/core";
import { AuthService } from "../servizi/auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthService){}

  token!: string;
  adminAccount!: string;

  ngOnInit(): void {
    this.adminAccount = this.auth.currentAccount;
    this.token = this.auth.token;
  }
}
