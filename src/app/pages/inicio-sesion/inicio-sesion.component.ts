import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pages-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {

  constructor(private authService: AuthService, private router: Router) { }

  correo: string | undefined;
  canLogin: boolean = true;

  loginForm = new FormGroup({
    correo: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    contraseña: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ])),
  });

  get f() {
    return this.loginForm.controls;
  }

  login(loginForm: any): any {

    const usuario = {
      Correo: loginForm.correo,
      Contraseña: loginForm.contraseña
    }

    this.authService.signInWithEmail(usuario.Correo, usuario.Contraseña)
      .then(() => {
        console.log("Autenticado con exito")
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        this.canLogin = false;
        console.log("Fallo el autenticar")
        return false;
      });
  }
}
