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
    // Actualizar el correo electrónico del usuario
    console.log("entrooo");
    if(this.usuario.correo && this.usuario.contrasena){
      console.log("entro");
      this.actualizarCorreo(this.usuario.correo, this.usuario.contrasena)
        .then(() => {
          console.log('Correo electrónico actualizado correctamente.');
        }).catch((error) => {
          console.error('Error al actualizar el correo electrónico: ', error);
        });
    }

    this.guardandoCambios = false;
    this.textoBoton = 'Editar perfil';
    this.setReadOnly(true);
  }


  async actualizarCorreo(correo: string, contrasena: string) {
    console.log("Entro");
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

}
