import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router){}

  actividades: any[] = [];
  actividadSeleccionada: any;

  ngOnInit() {
    this.recorrerColeccion();
  }

  async recorrerColeccion() {
    const db = firebase.firestore();
    const collectionRef = db.collection('actividades');
    const querySnapshot = await collectionRef.get();
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      this.actividades.push(data);
    });
  }

  navegarRegistroActividad() {
    this.router.navigate(['/registro-actividad']);
  }

}
