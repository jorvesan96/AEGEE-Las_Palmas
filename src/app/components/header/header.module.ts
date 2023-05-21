import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent
  ]
})

export class HeaderModule { }
