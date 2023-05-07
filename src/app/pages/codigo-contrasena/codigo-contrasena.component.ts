import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-codigo-contrasena',
  templateUrl: './codigo-contrasena.component.html',
  styleUrls: ['./codigo-contrasena.component.css']
})
export class CodigoContrasenaComponent {

  codigoForm = new FormGroup({
    codigo: new FormControl('', Validators.required)
  });


  constructor(private firestoreService: FirestoreService, private router: Router, private auth: AuthService) { }

  incorrect: boolean = false;

  get f() {
    return this.codigoForm.controls;
  }

  validCode(codigoForm: { value: any; }): boolean {

    if (codigoForm.value.codigo == this.firestoreService.getGeneratedCode()) {
      firebase.auth().sendPasswordResetEmail(this.auth.correo)
        .then(() => {
          console.log("Correo enviado");
          this.router.navigate(["/nueva-contrasena"])
          return true;
        })
        .catch(() => {
          console.log("No se ha podido enviar el correo")
          return false;
        })
    }
    this.incorrect = true;
    return false;
  }

}
