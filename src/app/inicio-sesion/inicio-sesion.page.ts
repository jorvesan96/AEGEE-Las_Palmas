import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
})
export class InicioSesionPage {

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

  login(): void {


  const correo = this.loginForm.value.correo ?? '';
  const contraseña = this.loginForm.value.contraseña ?? '';

    const usuario = {
      Correo: correo,
      Contraseña: contraseña
    };

    this.authService.signInWithEmail(usuario.Correo, usuario.Contraseña)
      .then(() => {
        console.log("Autenticado con éxito");
        this.router.navigate(["/"]);
      })
      .catch((error) => {
        this.canLogin = false;
        console.log("Falló la autenticación");
      });
  }

}
