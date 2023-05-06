import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nueva-contrasena',
  templateUrl: './nueva-contrasena.component.html',
  styleUrls: ['./nueva-contrasena.component.css']
})
export class NuevaContrasenaComponent {

  contrasenaForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {
    this.contrasenaForm = this.formBuilder.group({
      contraseña: ['', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')])],
      rep_contraseña: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  get f() {
    return this.contrasenaForm.controls;
  }

  checkPasswords(group: FormGroup) {
    const contraseña = group.controls['contraseña'].value;
    const rep_contraseña = group.controls['rep_contraseña'].value;

    if (!rep_contraseña) {
      return null;
    }

    return contraseña === rep_contraseña ? null : { notSame: true };
  }

  reset(contrasenaForm: any) {

    if (contrasenaForm.contrasena == contrasenaForm.rep_contraseña){

      this.auth.updatePassword(contrasenaForm.contrasena);

    }

  }

}


