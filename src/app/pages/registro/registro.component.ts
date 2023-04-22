import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { registerVersion } from 'firebase/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private http: HttpClient,
    private authService: AuthService, private db: AngularFireDatabase) { }

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
      fechaNacimiento: ['', Validators.required],
      pais: ['', Validators.required],
      localidad: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      repetirCorreo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      repetirContrasena: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  enviarRegistro(registroForm: any): void {

    const users = this.db.list('/usuarios');

    users.push(registroForm.value)
      .then(() => {
        console.log("Usuario añadido")
      })
      .catch((error) => {
        console.log("No se ha añadir el usuario")
      });

    this.authService.creteUserWIthEmail(registroForm.value.correo, registroForm.value.contrasena)
      .then(() => {
        console.log("Usuario creado")
      })
      .catch((error) => {
        console.log("No se ha podido crear el usuario")
      });

    console.log(registroForm.value)

  }
}

