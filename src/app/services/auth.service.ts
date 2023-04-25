import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userObject: AngularFireObject<any>= {} as AngularFireObject<any>;

  constructor(private _auth: AngularFireAuth, private _db: AngularFireDatabase) { }

  signInWithEmail(email: string, password: string) {
    return this._auth.signInWithEmailAndPassword(email, password);
  }

  creteUserWIthEmail(email: string, password: string){
    return this._auth.createUserWithEmailAndPassword(email, password);
  }

  getDatosUsuario(uid: string): Observable<any> {
    this.userObject = this._db.object(`usuarios/${uid}`);
    return this.userObject.snapshotChanges().pipe(
      map((data: any) => {
        return { id: data.key, ...data.payload.val() };
      })
    );
  }

}
