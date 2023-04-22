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

  creteUserWIthEmail(email: string, password: string){
    return this._auth.createUserWithEmailAndPassword(email, password);
  }

}
