import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Auth, authState, signOut } from '@angular/fire/auth';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _auth: AngularFireAuth, private user: Auth) { }

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

  isLogged(): boolean {
    // this.user.onAuthStateChanged((_user) => {
    //   if (_user) {
    //     console.log('El usuario está autenticado:', _user);
    //     return true;
    //   } else {
    //     console.log('El usuario no está autenticado');
    //     return false;
    //   }
    // });

    this._auth.authState.pipe(take(1)).subscribe(_user => {
      console.log(_user);
    });

    return false;
  }
}
