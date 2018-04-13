import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const email = localStorage.getItem('email');
    console.log('email', email);
    if(email != null) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }

  }
}
