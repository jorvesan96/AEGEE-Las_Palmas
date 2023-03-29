import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ActividadesLocalesComponent } from './pages/actividades-locales/actividades-locales.component';
import { BuddyProgramComponent } from './pages/buddy-program/buddy-program.component';
import { DetallesActividadComponent } from './pages/detalles-actividad/detalles-actividad.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { MisActividadesComponent } from './pages/mis-actividades/mis-actividades.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { RegistroActividadComponent } from './pages/registro-actividad/registro-actividad.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ActividadesLocalesComponent,
    BuddyProgramComponent,
    DetallesActividadComponent,
    InicioSesionComponent,
    MisActividadesComponent,
    PerfilUsuarioComponent,
    RegistroActividadComponent,
    VoluntariadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
