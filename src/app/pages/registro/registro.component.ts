import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

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
    console.log(this.registroForm.value);
  }

}
