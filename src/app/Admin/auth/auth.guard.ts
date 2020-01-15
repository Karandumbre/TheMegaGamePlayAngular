import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private ls: LoginService) { }

  canActivate(): boolean {
    if (!this.ls.isLoggedIn()) {
      this.router.navigateByUrl('/an-admin');
      this.ls.deleteToken();
      return false;
    }
    return true;
  }
}
