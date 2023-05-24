import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup = new FormGroup({});
  paso1Completo = false;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  paises = [
    { value: 'México', label: 'México' },
    { value: 'Estados Unidos', label: 'Estados Unidos' },
    { value: 'España', label: 'España' },
    { value: 'Colombia', label: 'Colombia' },
    { value: 'Perú', label: 'Perú' }
  ];


  ngOnInit() {

    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      dni: ['', Validators.required],
      nacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      localidad: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9), Validators.pattern(/^[0-9]*$/)]],
      correo: ['', [Validators.required, Validators.email]],
      repetirCorreo: ['', [Validators.required, Validators.email, validarEmailIgual()]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      repetirContrasena: ['', [Validators.required, Validators.minLength(6), validarContrasenaIgual()]]
    });
  }

  get f() {
    return this.registroForm.controls;
  }


  enviarPaso1() {
    if (this.registroForm.get('nombre')?.invalid || this.registroForm.get('apellidos')?.invalid ||
      this.registroForm.get('dni')?.invalid || this.registroForm.get('nacimiento')?.invalid ||
      this.registroForm.get('pais')?.invalid || this.registroForm.get('localidad')?.invalid) {
      return;
    }
    this.paso1Completo = true;
  }


  enviarRegistro(registroForm: any) {

    this.authService.createUserWIthEmail(registroForm.value.correo, registroForm.value.contrasena)
      .then(() => {
        console.log("Usuario creado:")
        this.createUser();
      })
      .catch(() => {
        console.log("No se ha podido crear el usuario")
      });

    delete registroForm.value.repetirCorreo;
    delete registroForm.value.repetirContrasena;

    const fechaNacimiento = this.registroForm.value.nacimiento;
    const fechaFormateada = moment(fechaNacimiento).format('DD-MM-YYYY');

    this.registroForm.value.nacimiento = fechaFormateada;

  }
  createUser() {

    const auth = firebase.auth();
    let userID !: string;
    const db = firebase.firestore();

    auth.onAuthStateChanged((user) => {
      if (user) {
        userID = user.uid;

        const usuariosRef = db.collection('usuarios').doc(userID);
        usuariosRef.set(this.registroForm.value)
          .then(() => {
            console.log("Usuario añadido");
            this.router.navigate(["/recepcion-documentos"]);
          })
          .catch(() => {
            console.log("No se ha podido añadir al usuario");
          });
      }
    });
  }
}

function validarEmailIgual(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const correo = control.parent?.get('correo');
    const repetirCorreo = control.parent?.get('repetirCorreo');
    if (correo?.value !== repetirCorreo?.value) {
      return { emailNoIguales: true };
    }
    return null;
  };
}


function validarContrasenaIgual(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const contrasena = control.parent?.get('contrasena');
    const repetirContrasena = control.parent?.get('repetirContrasena');
    if (contrasena?.value !== repetirContrasena?.value) {
      return { contrasenaNoIguales: true };
    }
    return null;
  };
}

