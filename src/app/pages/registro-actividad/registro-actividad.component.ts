import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Usuario } from 'src/app/services/usuario';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.css']
})
export class RegistroActividadComponent {

  constructor(private afAuth: AngularFireAuth, private firestoreService: FirestoreService) { }

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

  userUID!: string;
  valoresOriginales!: Usuario;

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        console.log("Entro");
        this.userUID = user.uid;

        console.log(this.userUID);
        this.firestoreService.getUser(this.userUID).subscribe((user: any) => {
          this.usuario = user;
          this.valoresOriginales = { ...user };

          console.log(this.usuario);
        });
      }
    });
  }

}
