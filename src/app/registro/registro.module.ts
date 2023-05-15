import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { RegistroPageRoutingModule } from './registro-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatStepperModule} from '@angular/material/stepper';


import { RegistroPage } from './registro.page';
import { SeparadorModule } from '../components/separador/separador.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPageRoutingModule,
    SeparadorModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatOptionModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
