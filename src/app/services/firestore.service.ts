import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getUser(uid: string) {
    return this.firestore.collection("usuarios").doc(uid).valueChanges();
  }

  updateUser(datosActualizados: any, uid: string) {
    return this.firestore.collection('usuarios').doc(uid).update(datosActualizados);
  }

}
