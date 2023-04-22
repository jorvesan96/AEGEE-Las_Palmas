import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flecha-subida',
  templateUrl: './flecha-subida.component.html',
  styleUrls: ['./flecha-subida.component.css']
})
export class FlechaSubidaComponent {

  btnGoTop!: ElementRef;

  ngOnInit(): void {
    this.btnGoTop = new ElementRef(document.querySelector('#myBtn'));

    this.btnGoTop.nativeElement.addEventListener('click', () => {
      if (this.btnGoTop.nativeElement instanceof HTMLButtonElement) {
        this.btnGoTop.nativeElement.style.display = 'block';
      }

      scrollTo({ top: 0, behavior: 'smooth' });
    });

    addEventListener('scroll', () => {
      if (window.pageYOffset > 0) {
        this.btnGoTop.nativeElement.style.display = 'block';
      } else {
        this.btnGoTop.nativeElement.style.display = 'none';
      }
    });
  }
}
