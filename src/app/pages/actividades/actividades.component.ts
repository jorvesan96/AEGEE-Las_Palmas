import { Component } from '@angular/core';
import { actividad } from 'src/app/services/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('2s ease-out'))
    ])
  ]
})
export class ActividadesComponent {

  constructor(private actividadService: ActividadesService){}

  //actividades: actividad[] = [];
  actividades: any = [];
  contentHeight1 = "5vw";  
  contentHeight2 = "5vw";
  isContentVisible1 = false;
  isContentVisible2 = false;


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

  accionarBoton1(){
    var icono = document.getElementById("icono1");
    icono?.classList.toggle("fa-sort-down");
    icono?.classList.toggle("fa-sort-up");
    this.isContentVisible1 = !this.isContentVisible1;
    this.contentHeight1 = this.isContentVisible1 ? '20vw' : '5vw';
    
  }
  accionarBoton2(){
    var icono = document.getElementById("icono2");
    icono?.classList.toggle("fa-sort-down");
    icono?.classList.toggle("fa-sort-up");
    this.isContentVisible2 = !this.isContentVisible2;
    this.contentHeight2 = this.isContentVisible2 ? '20vw' : '5vw';
    
  }

}
