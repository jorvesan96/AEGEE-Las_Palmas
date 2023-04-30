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

  userUID!: string;
  user: any;

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private firestoreService: FirestoreService) { }

  ngOnInit() {

    addEventListener('DOMContentLoaded', () => {
      const btnEditarPerfil: HTMLElement | null = document.getElementById('editarPerfil');
      const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
      // Variable que indica si se están editando los campos o no
      let editando: boolean = false;

      if (btnEditarPerfil) {
        btnEditarPerfil.addEventListener('click', () => {
          // Cambia el valor de la variable cada vez que se hace clic en el botón
          editando = !editando;

          if (editando) {
            // Cambia el texto del botón a "Guardar cambios"
            if (btnEditarPerfil.textContent) {
              btnEditarPerfil.textContent = 'Guardar cambios';
            }
            inputs.forEach((input: HTMLInputElement) => {
              input.readOnly = false;
            });
          } else {
            // Cambia el texto del botón a "Editar perfil"
            if (btnEditarPerfil.textContent) {
              btnEditarPerfil.textContent = 'Editar perfil';
            }
            inputs.forEach((input: HTMLInputElement) => {
              input.readOnly = true;
            });
          }
        });
      }
    });

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

}
