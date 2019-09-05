import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  // Attribut de la classe
  signinForm: FormGroup;
  errorMessage: string;
// formBuilder pour la creation du formulaire,
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router ) { }
// methode ngOnInit permet de generer tout au chargment de la page
  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }
  onSubmit() {
    // pour recuperer la valeur de l'email et du mot de passe entrer dans la formulaire par le User
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    // Methode Asynchrone qui permet de rediriger le User dans la Page des livres si il se connecte
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
}
}
