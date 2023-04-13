import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  usuario = {
    nombre: '',
    apellidos: '',
    dni: '',
    fecha: '',
    pais: '',
    localidad: '',
    estudios: '',
    universidad: '',
    carrera: '',
    telefono: '',
    correo: '',
    contraseña: ''
  }

  constructor(private http: HttpClient) {}

  registrar() {
    this.http.post('assets/json/usuario.json', this.usuario)
      .subscribe(
        (data) => {
          console.log('Registro exitoso', data);
        },
        (error) => {
          console.log('Error en el registro', error);
        }
      );
  }
}
