import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { RegistroPageRoutingModule } from './registro-routing.module';
import { RegistroPage } from './registro.page';
import { SeparadorModule } from '../components/separador/separador.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    SeparadorModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule

  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule { }
