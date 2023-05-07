import { Component } from '@angular/core';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']

})
export class ActividadesComponent {

  constructor(private router: Router){}

  //actividades: actividad[] = [];
  actividades: any = [];

  ngOnInit(){
    //this.actividades = this.actividadService.getActividades();
    //console.log(this.actividades);
    this.recorrerColeccion();
  }

  async recorrerColeccion(){
    const db = firebase.firestore();
    const collectionRef = db.collection('actividades');
    const miArray: firebase.firestore.DocumentData[] = [];
    const querySnapshot = await collectionRef.get();
    ( querySnapshot).forEach((doc) => {
      const data = doc.data();
      // Aquí puedes hacer lo que quieras con los datos de cada documento.
      // Por ejemplo, puedes almacenarlos en un array:
      miArray.push(data);
      console.log(miArray);
    });
    this.actividades= miArray;
  }

  navegarRegistroActividad() {
    this.router.navigate(['/registro-actividad']);
  }

}
