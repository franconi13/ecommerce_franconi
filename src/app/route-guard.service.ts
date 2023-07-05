import { Injectable } from '@angular/core';
import { AuthService } from './servizi/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }

  canActivate():boolean {
    if (this.auth.isUserLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['login'])
      return false;
    }
  }
}
