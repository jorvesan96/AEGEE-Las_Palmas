import { Component, OnInit, HostListener  } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  getScreenWidth: number;
  getScreenHeight: number;

  public source: string = "../../../assets/icons/burger menu.png";

  isOpen = false;
  isLogged: boolean = false;

  constructor(private afAuth: AngularFireAuth) {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      this.isLogged = !!user;
      console.log(this.isLogged);
    });
  }

  @HostListener('window:resize')
  onResize() {
    // Actualizar el tamaño de pantalla cuando ocurra el evento de redimensionamiento
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.source = "../../../assets/icons/close-logo.png";
    } else {
      this.source = "../../../assets/icons/burger menu.png";
    }
  }

  cerrarSesion() {
    this.afAuth.signOut()
      .then(() => {
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error);
      });
  }

}
