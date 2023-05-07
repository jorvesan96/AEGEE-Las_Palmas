import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Usuario } from 'src/app/services/usuario';
import { MisActividadesService } from 'src/app/services/mis-actividades.service';

@Component({
  selector: 'app-registro-actividad',
  templateUrl: './registro-actividad.component.html',
  styleUrls: ['./registro-actividad.component.css']
})
export class RegistroActividadComponent {

  constructor(private afAuth: AngularFireAuth, private firestoreService: FirestoreService,
              private misActividadesService: MisActividadesService) { }

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
  actividadSeleccionada: any;

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

  onSubmit() {
    this.misActividadesService.agregarActividad(this.actividadSeleccionada);
  }

}
