import { Component, OnInit } from "@angular/core";
import { AuthService } from "../servizi/auth.service";
import { RouteGuardService } from "../route-guard.service";
import { Router } from '@angular/router';
import { Account } from "../model/account";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  account: Account = new Account();
  token!: string;
  message!: string;
  ngOnInit(): void {

  }

  constructor(private auth: AuthService, private routeService: RouteGuardService, private router: Router) {}

  testLoginUser(account: Account): void {
    this.auth.loginUser(account).subscribe((message:string) => {
      this.token = message;
      this.auth.token = message;
      this.auth.isUserLoggedIn();
      this.router.navigate(['tabUsers']);
    })
  }

  onFormSubmit() {
    this.testLoginUser(this.account);
  }

  resetMessage() {
    this.message = '';
  }

}


