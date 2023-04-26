import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-contrasena-olvidada',
  templateUrl: './contrasena-olvidada.component.html',
  styleUrls: ['./contrasena-olvidada.component.css']
})
export class ContrasenaOlvidadaComponent {

  constructor (private authService: AuthService){}

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

  enviarCodigo(olvidadaForm: any): void {

    return this.authService.userExists(olvidadaForm.correo);
  }
}
