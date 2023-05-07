import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from 'src/app/services/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Component({
  selector: 'pages-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})

export class PerfilUsuarioComponent {

  usuario: Usuario = {
    nombre: '',
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

  inputWidth = 'auto';
  inputValue!: string;
  valoresOriginales!: Usuario;
  guardandoCambios = false;
  textoBoton: string = 'Editar perfil';
  userUID!: string;
  user: any;

  constructor(private afAuth: AngularFireAuth, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userUID = user.uid;

        this.firestoreService.getUser(this.userUID).subscribe((user: any) => {
          this.usuario = user;
          this.valoresOriginales = { ...user };
        });
      }
    });
  }

  editarPerfil() {
    this.guardandoCambios = !this.guardandoCambios;
    this.textoBoton = this.guardandoCambios ? 'Guardar cambios' : 'Editar perfil';
    this.setReadOnly(!this.guardandoCambios);
  }

  cancelarCambios() {
    this.usuario = { ...this.valoresOriginales };
    this.guardandoCambios = false;
    this.textoBoton = 'Editar perfil';
    this.setReadOnly(true);
  }

  guardarCambios() {

    this.usuario.nombre=this.inputValue;

    if (this.usuario.correo && this.usuario.contrasena) {
      this.actualizarCorreo(this.usuario.correo, this.usuario.contrasena)
        .then(() => {
          // Actualizar el correo electrónico en Firestore
          this.firestoreService.updateUser({ correo: this.usuario.correo, repetirCorreo: this.usuario.repetirCorreo }, this.userUID)
            .then(() => {
              this.guardandoCambios = false;
              this.textoBoton = 'Editar perfil';
              this.setReadOnly(true);
            })
            .catch((error) => {
              console.error('Error al actualizar el correo electrónico en la base de datos: ', error);
            });
        })
        .catch((error) => {
          console.error('Error al actualizar el correo electrónico: ', error);
        });
    }

    // Actualizar los datos del usuario en Firestore
    this.firestoreService.updateUser(this.usuario, this.userUID)
      .then(() => {
        this.guardandoCambios = false;
        this.textoBoton = 'Editar perfil';
        this.setReadOnly(true);
      })
      .catch((error) => {
        console.error('Error al actualizar los datos: ', error);
      });
  }

  async actualizarCorreo(correo: string, contrasena: string) {
    const user = await this.afAuth.currentUser;
    if (user && user.email) {
      const credenciales = firebase.auth.EmailAuthProvider.credential(user.email, contrasena);
      await user.reauthenticateWithCredential(credenciales);
      await user.updateEmail(correo);
      return this.firestoreService.updateUser({ correo }, this.userUID);
    } else {
      throw new Error('No hay ningún usuario autenticado.');
    }
  }

  setReadOnly(valor: boolean) {
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    inputs.forEach((input: HTMLInputElement) => {
      input.readOnly = valor;
    });
  }

  onInput() {
    this.inputWidth = (this.inputValue.length  * 55) + 'px'; // Ajusta el ancho en función de la longitud del texto
  }
}
