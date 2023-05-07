import { NgModule } from '@angular/core';
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
import { firebaseConfig } from 'src/environment/environment';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';

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
import { FlechaSubidaComponent } from './components/flecha-subida/flecha-subida.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NuevaContrasenaComponent } from './pages/nueva-contrasena/nueva-contrasena.component';
import { ContrasenaOlvidadaComponent } from './pages/contrasena-olvidada/contrasena-olvidada.component';
import { CodigoContrasenaComponent } from './pages/codigo-contrasena/codigo-contrasena.component';
import { provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeApp } from 'firebase/app';
import { RegistroActividadComponent } from './pages/registro-actividad/registro-actividad.component';

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
    SeparadorComponent,
    FlechaSubidaComponent,
    PopUpComponent,
    NuevaContrasenaComponent,
    ContrasenaOlvidadaComponent,
    CodigoContrasenaComponent,
    RegistroActividadComponent
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
    AngularFireModule.initializeApp(firebaseConfig.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    SlickCarouselModule,
    MatDialogModule,
    MatIconModule,
    provideAuth(() => getAuth()),
    provideFirebaseApp(() => initializeApp(firebaseConfig.firebase)),
    AngularFireDatabaseModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
