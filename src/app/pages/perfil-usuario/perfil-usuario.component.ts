import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/services/usuario'

@Component({
  selector: 'pages-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent {

  usuario: Usuario = {
    nombre: '',
    apellidos: '',
    dni: '',
    correo: '',
    estudia: true,
    estudio: '',
    nacimiento: '',
    telefono: '',
    pais: '',
    contrasena: '',
    localidad: ''
  };

  user: Observable<any>;

  constructor(private authService: AuthService, private afAuth: AngularFireAuth) {
    this.user = this.afAuth.authState;
  }

  ngOnInit() {
    this.user.subscribe(user => {
      if (user) {
        const uid = user.uid;
        this.authService.getDatosUsuario(uid).subscribe(usuario => {
          this.usuario = usuario;
          console.log(usuario.id); // aquí obtienes el ID del usuario
        });
      }
    });
  }

}
