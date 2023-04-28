import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { registerVersion } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { onAuthStateChanged } from 'firebase/auth';
import * as moment from 'moment';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = new FormGroup({});
  paso1Completo = false;
  @ViewChild('circle1') circle1!: ElementRef;
  @ViewChild('circle2') circle2!: ElementRef;
  constructor(private fb: FormBuilder, private http: HttpClient,
    private authService: AuthService, private db: AngularFireDatabase,
    private fbs: AngularFirestore) { }

  paises = [
    { value: 'mx', viewValue: 'México' },
    { value: 'us', viewValue: 'Estados Unidos' },
    { value: 'es', viewValue: 'España' },
    { value: 'co', viewValue: 'Colombia' },
    { value: 'pe', viewValue: 'Perú' }
  ];


  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      nacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      localidad: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      repetirCorreo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      repetirContrasena: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  enviarPaso1() {
    if (this.registroForm.get('nombre')?.invalid || this.registroForm.get('apellidos')?.invalid ||
      this.registroForm.get('dni')?.invalid || this.registroForm.get('fechaNacimiento')?.invalid ||
      this.registroForm.get('pais')?.invalid || this.registroForm.get('localidad')?.invalid) {
      return;
    }
    this.paso1Completo = true;
  }

  enviarRegistro(registroForm: any) {

    this.authService.createUserWIthEmail(registroForm.value.correo, registroForm.value.contrasena)
      .then(() => {
        console.log("Usuario creado:")
      })
      .catch((error) => {
        console.log("No se ha podido crear el usuario")
      });

    console.log(registroForm.value)

    const fechaNacimiento = this.registroForm.value.nacimiento;
    const fechaFormateada = moment(fechaNacimiento).format('DD-MM-YYYY');

    this.registroForm.value.nacimiento = fechaFormateada;

    const auth = firebase.auth();
    let userID !: string;
    const db = firebase.firestore();

    auth.onAuthStateChanged((user) => {
      if (user) {
        userID = user.uid;
        console.log('ID de usuario:', userID);

        const usuariosRef = db.collection('usuarios').doc(userID);
        usuariosRef.set(registroForm.value)
          .then(docRef => {
            console.log("Usuario añadido");
          })
          .catch((error) => {
            console.log("No se ha podido añadir al usuario");
          });
      }
    });

  }
  anterior() {
    this.circle1.nativeElement.setAttribute('r', '6.5vw');
    this.circle2.nativeElement.setAttribute('r', '4vw');
    this.circle1.nativeElement.setAttribute('fill', '#C2DE5D');
    this.circle2.nativeElement.setAttribute('fill', '#A0C514');
  }
  siguiente() {
    this.circle1.nativeElement.setAttribute('r', '4vw');
    this.circle2.nativeElement.setAttribute('r', '6.5vw');
    this.circle1.nativeElement.setAttribute('fill', '#A0C514');
    this.circle2.nativeElement.setAttribute('fill', '#C2DE5D');
  }
}

