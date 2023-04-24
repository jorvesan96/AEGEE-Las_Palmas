import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('2s ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit{
  contentHeight = '0px';
  isContentVisible = false;

  ngOnInit(): void {
    // Aquí puedes poner el código que deseas que se ejecute al iniciar el componente
  }
  
  constructor() { }
  slideConfig = {
    "autoplay": true,
    "autoplaySpeed": 5000,
    "nextArrow": false,
    "previousArrow": false,
    "dots": true,
    "infinite": true,
    "speed": 300,
    "slidesToShow": 1,
    "slidesToScroll": 1
  };

  accionarBoton(){
    var icono = document.getElementById("icono");
    icono?.classList.toggle("fa-sort-down");
    icono?.classList.toggle("fa-sort-up");
    this.isContentVisible = !this.isContentVisible;
    this.contentHeight = this.isContentVisible ? '2800px' : '0px';
    
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
