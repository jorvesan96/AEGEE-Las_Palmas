import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MisActividadesService {

  actividades: any = [];
  actividades$: Subject<any> = new Subject();

  agregarActividad(actividad: any) {
    this.actividades.push(actividad);
    this.actividades$.next(this.actividades); // emitimos los cambios
  }

  getActividades() {
    return this.actividades;
  }

  limpiarActividades() {
    this.actividades = [];
    this.actividades$.next(this.actividades); // emitimos los cambios
  }
}
