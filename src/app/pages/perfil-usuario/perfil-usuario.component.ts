import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/services/usuario'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

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

  editando = false;
  textoBoton: string = 'Editar perfil';

  userUID!: string;
  user: any;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userUID = user.uid;
        console.log(this.userUID);

        this.firestoreService.getUser(this.userUID).subscribe((user: any) => {
          console.log(user);
          this.usuario = user;
        });
      }
    });
  }

  editarPerfil() {
    this.editando = !this.editando;
  }

  guardarCambios() {
    this.editando = false;
  }

  cambiarModoEdicion() {
    if (this.textoBoton === 'Editar perfil') {
      this.textoBoton = 'Guardar cambios';
      this.setReadOnly(false);
    } else {
      this.textoBoton = 'Editar perfil';
      this.setReadOnly(true);
    }
  }

  setReadOnly(valor: boolean) {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      input.readOnly = valor;
    });
  }

}
