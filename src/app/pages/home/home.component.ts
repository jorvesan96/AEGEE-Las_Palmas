import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', overflow: 'hidden' })),
      state('expanded', style({ height: '*', overflow: 'hidden' })),
      transition('collapsed <=> expanded', animate('2s ease-out'))
    ])
  ]
})
export class HomeComponent implements OnInit{
  contentHeight = "45vw";
  isContentVisible = false;

  slides = [
    'https://firebasestorage.googleapis.com/v0/b/aegee-las-palmas-370b7.appspot.com/o/Carrusel%2FDSC_0329.JPG?alt=media&token=a993b269-fec2-48a5-b5bf-70f75a669a5b',
    'https://firebasestorage.googleapis.com/v0/b/aegee-las-palmas-370b7.appspot.com/o/Carrusel%2FIMG-20190910-WA0005.jpg?alt=media&token=162ac50f-af1b-4e0e-b72b-d816de234601',
    'https://firebasestorage.googleapis.com/v0/b/aegee-las-palmas-370b7.appspot.com/o/Carrusel%2FIMG_20190729_180304.jpg?alt=media&token=0e375687-0daa-4771-8823-b2a93cbab58a',
    'https://firebasestorage.googleapis.com/v0/b/aegee-las-palmas-370b7.appspot.com/o/Carrusel%2FIMG_20190808_162303.jpg?alt=media&token=9221717b-4859-4338-a41a-73e8682e1c7f',
    'https://firebasestorage.googleapis.com/v0/b/aegee-las-palmas-370b7.appspot.com/o/Carrusel%2FMVIMG_20200313_095745.jpg?alt=media&token=c98a26fd-98b7-4256-bdf7-e9d932d7004e'
  ];

  ngOnInit(): void {

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
    this.contentHeight = this.isContentVisible ? '145vw' : '45vw';
    
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
