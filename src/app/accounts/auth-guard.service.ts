import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }


  canActivate(): boolean {
    this.auth.isAuthenticated().subscribe(res => {
      console.log("Sup yall")
      console.log(res)
      return true;
    }, err => {
      console.log("Error")
      console.log(err)
      return false;
    })
    return false;
  }
}
