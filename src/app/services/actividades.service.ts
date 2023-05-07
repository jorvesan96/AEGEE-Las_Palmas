import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  constructor(private _db: AngularFireDatabase) { }

  actividades: any = [];
  getActividades(){

    this.actividades = this._db.object('actividades');
    return this.actividades;
  }
}
