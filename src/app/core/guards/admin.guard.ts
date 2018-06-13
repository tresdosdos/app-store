import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from '../../shared/user-data/user-data.service';
import { RIGHTS } from '../../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private user: UserDataService,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userData = this.user.getUserData();
    if (userData.rights === RIGHTS.ADMIN) {
      return true;
    }
    this.router.navigate(['/']);
  }
}
