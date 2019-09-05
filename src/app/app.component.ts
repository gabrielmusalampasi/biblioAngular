import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor() {
  var firebaseConfig = {
    apiKey: "AIzaSyA_ajgnf4MtOf4FckTlYgmtriRjKDREGtE",
    authDomain: "biblioangular-f2285.firebaseapp.com",
    databaseURL: "https://biblioangular-f2285.firebaseio.com",
    projectId: "biblioangular-f2285",
    storageBucket: "",
    messagingSenderId: "869965217757",
    appId: "1:869965217757:web:47e2120fb3cbc3b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}
}
