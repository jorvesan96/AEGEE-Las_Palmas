import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _auth: AngularFireAuth) { }

  signInWithEmail(email: string, password: string) {
    return this._auth.signInWithEmailAndPassword(email, password);
  }

  createUserWIthEmail(email: string, password: string) {
    return this._auth.createUserWithEmailAndPassword(email, password);
  }

  userExists(correo: string) {
    this._auth.fetchSignInMethodsForEmail(correo)
      .then((signInMethods: string[]) => {
        if (signInMethods && signInMethods.length > 0) {
          return true;
        } else {
          return false;
        }
      });
  }
}
