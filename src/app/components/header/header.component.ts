import { Component, HostListener,  } from '@angular/core';

@Component({
  selector: 'components-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public getScreenWidth: any;
  public getScreenHeight: any;
  public source: String = "../../../assets/icons/burger menu.png";

  isOpen = false;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen
    if (this.isOpen){
      this.source = "../../../assets/icons/close-logo.png";
    } else {
      this.source = "../../../assets/icons/burger menu.png";
    }
  }
}
