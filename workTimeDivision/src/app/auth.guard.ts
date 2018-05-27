import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute} from '@angular/router';

@Injectable()
export class ManagerAuthGuard implements CanActivate {

  constructor(private router: Router, private route:ActivatedRoute) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(sessionStorage);
    if (sessionStorage.getItem('managerRights') == 'true' && sessionStorage.getItem('user')) {
      console.log(`hi ${sessionStorage.getItem('user')}`);
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/'] );
    //{ queryParams: { returnUrl: state.url }}
    return false;
  }
}

@Injectable()
export class UserAuthGuard implements CanActivate{
  constructor(private router: Router, private route:ActivatedRoute) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(sessionStorage);
    console.log(this.route.snapshot.params['user']);
    if (sessionStorage.getItem('managerRights') == 'false' && sessionStorage.getItem('user')) {
      console.log(`hi ${sessionStorage.getItem('user')}`);
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/']);
    return false;
  }
}
