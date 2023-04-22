import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environment/environment';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BuddyProgramComponent } from './pages/buddy-program/buddy-program.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { MisActividadesComponent } from './pages/mis-actividades/mis-actividades.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { CreadorActividadesComponent } from './pages/creador-actividades/creador-actividades.component';
import { RecepcionDocumentosComponent } from './pages/recepcion-documentos/recepcion-documentos.component';
import { SeparadorComponent } from './components/separador/separador.component';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  { path: 'voluntariado', component: VoluntariadoComponent },
  { path: 'buddyProgram', component: BuddyProgramComponent },
  { path: 'actividades', component: ActividadesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuddyProgramComponent,
    InicioSesionComponent,
    MisActividadesComponent,
    PerfilUsuarioComponent,
    VoluntariadoComponent,
    HomeComponent,
    RegistroComponent,
    ActividadesComponent,
    CreadorActividadesComponent,
    RecepcionDocumentosComponent,
    SeparadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
