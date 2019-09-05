import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
// pour faire une garde il faut implemanter CanActivate
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  // Methode pour la garde des route si le user est authentifier ou se deconnecte, sinon retour a la page de connecxion
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot
  ): Observable<boolean>  | Promise<boolean>  | boolean  {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
            } else {
              this.router.navigate(['/auth', 'signin']);
              resolve(false);
            }
          }
        );
      }
    );

  }
}
