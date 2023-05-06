import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import firebase from 'firebase/compat/app';
import 'firebase/auth';

@Component({
  selector: 'app-contrasena-olvidada',
  templateUrl: './contrasena-olvidada.component.html',
  styleUrls: ['./contrasena-olvidada.component.css']
})

export class ContrasenaOlvidadaComponent {

  generatedCode: string = "";

  constructor(private authService: AuthService, private router: Router,
    private afs: AngularFirestore, private firestoreService: FirestoreService) { }

  correo: string | undefined;

  olvidadaForm = new FormGroup({
    correo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
  });

  get f() {
    return this.olvidadaForm.controls;
  }

  enviarCodigo(olvidadaForm: FormGroup): void {

    firebase.auth().fetchSignInMethodsForEmail(olvidadaForm.value.correo)
      .then(signInMethods => {
        if (signInMethods.length > 0) {
          this.router.navigate(["/codigo-contrasena"]);
          this.crearCodigo()
          return true;
        } else {
          return false;
        }
      })
      .catch(error => {
        return false;
      });

      this.authService.correo = olvidadaForm.value.correo;
  }

  crearCodigo() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const codeLength = 6;
    const randomValues = new Uint32Array(codeLength);
    const code = [];

    window.crypto.getRandomValues(randomValues);

    for (let i = 0; i < codeLength; i++) {
      const index = randomValues[i] % characters.length;
      code.push(characters[index]);
    }

    this.generatedCode = code.join("");
    console.log(this.generatedCode)

    this.firestoreService.generatedCode = this.generatedCode;
  }
}
