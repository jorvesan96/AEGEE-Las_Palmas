import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InicioSesionPageRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionPage } from './inicio-sesion.page';
import { HeaderComponent } from '../components/header/header.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSesionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InicioSesionPage, HeaderComponent]
})
export class InicioSesionPageModule {}
