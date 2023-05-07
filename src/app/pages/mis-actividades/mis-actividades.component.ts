import { Component } from '@angular/core';
import { MisActividadesService } from 'src/app/services/mis-actividades.service';

@Component({
  selector: 'pages-mis-actividades',
  templateUrl: './mis-actividades.component.html',
  styleUrls: ['./mis-actividades.component.css']
})
export class MisActividadesComponent {

  constructor(private misActividadesService: MisActividadesService) { }

  actividades: any = [];

  ngOnInit() {
    this.misActividadesService.actividades$.subscribe(actividades => {
      this.actividades = actividades;
      this.actividades = this.misActividadesService.getActividades(); // inicializamos

      console.log(this.actividades);
    });
  }

}
