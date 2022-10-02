import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService:AuthService,
    private router: Router,
    public messageService: MessageService,
  )
  {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.authService.isLoggedIn) {

      this.messageService.add({
        severity: 'info',
        summary: ' Access Denied',
        detail: `Login is Required to Access This Page!`
      });

      this.router.navigate(['login']).then(r => {});
    }
    return true;
  }

}
