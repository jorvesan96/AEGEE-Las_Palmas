import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private http: HttpClient,
    private authService: AuthService, private db: AngularFireDatabase,
    private fbs: AngularFirestore) { }

    paises = [  { value: 'mx', label: 'México' },
                { value: 'us', label: 'Estados Unidos' }, 
                { value: 'es', label: 'España' }, 
                { value: 'co', label: 'Colombia' }, 
                { value: 'pe', label: 'Perú' }];


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
      })
      .catch((error) => {
        console.log("No se ha podido crear el usuario")
      });

    delete registroForm.value.repetirCorreo;
    delete registroForm.value.repetirContrasena;

    const fechaNacimiento = this.registroForm.value.nacimiento;
    const fechaFormateada = moment(fechaNacimiento).format('DD-MM-YYYY');

    this.registroForm.value.nacimiento = fechaFormateada;

    const auth = firebase.auth();
    let userID !: string;
    const db = firebase.firestore();

    auth.onAuthStateChanged((user) => {
      if (user) {
        userID = user.uid;
        
        const selectedPais = this.paises.find(pais => pais.value === registroForm.value.pais);
        const paisLabel = selectedPais ? selectedPais.label : '';
  
        // add label to form data before saving to Firestore
        registroForm.value.pais = paisLabel;


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
}

