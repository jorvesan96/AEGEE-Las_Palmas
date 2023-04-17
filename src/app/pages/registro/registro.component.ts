import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,private http: HttpClient) { }

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

  enviarRegistro() {
    if (this.registroForm) {
      const usuario = {
        nombre: this.registroForm.get('nombre')?.value,
        apellidos: this.registroForm.get('apellidos')?.value,
        dni: this.registroForm.get('dni')?.value,
        fechaNacimiento: this.registroForm.get('fechaNacimiento')?.value,
        pais: this.registroForm.get('pais')?.value,
        localidad: this.registroForm.get('localidad')?.value,
        telefono: this.registroForm.get('telefono')?.value,
        correo: this.registroForm.get('correo')?.value,
        contrasena: this.registroForm.get('contrasena')?.value
      };

      const blob = new Blob([JSON.stringify(usuario)], { type: 'application/json' });
      FileSaver.saveAs(blob, 'usuario.json');
    }
  }
}
