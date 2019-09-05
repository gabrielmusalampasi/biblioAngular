import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  // Methode Asynchrone(Promise) pour l'authentification avec Firebase, pour cree un compte
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        // methode firebase
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // methode asynchrone pour se connecter avec email et mot de passe
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }
  // methode pour se decoonecter
  signOutUser() {
    firebase.auth().signOut();
  }


}
