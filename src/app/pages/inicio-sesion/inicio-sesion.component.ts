import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'pages-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  constructor (private authService: AuthService){}

  correo: string | undefined;

  loginForm = new FormGroup({
    correo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    contraseña: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$') //this is for the letters (both uppercase and lowercase) and numbers validation
    ])),
  });

  get f() {
    return this.loginForm.controls;
  }

  login(loginForm: any): void {

    const usuario = {
      Correo: loginForm.correo,
      Contraseña: loginForm.contraseña
    }

    this.authService.signInWithEmail(usuario.Correo, usuario.Contraseña)
      .then(() => {
        // El usuario se ha autenticado correctamente
        console.log("Autenticado con exito")
      })
      .catch((error) => {
        // Ha habido un error al autenticar al usuario
        console.log("Fallo el autenticar")
      });
  }
}
