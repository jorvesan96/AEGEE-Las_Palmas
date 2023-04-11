import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
