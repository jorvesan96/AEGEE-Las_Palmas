import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './pages/actividades/actividades.component';
import { BuddyProgramComponent } from './pages/buddy-program/buddy-program.component';
import { CreadorActividadesComponent } from './pages/creador-actividades/creador-actividades.component';
import { HomeComponent } from './pages/home/home.component';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { MisActividadesComponent } from './pages/mis-actividades/mis-actividades.component';
import { PerfilUsuarioComponent } from './pages/perfil-usuario/perfil-usuario.component';
import { RecepcionDocumentosComponent } from './pages/recepcion-documentos/recepcion-documentos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { VoluntariadoComponent } from './pages/voluntariado/voluntariado.component';
import { NuevaContrasenaComponent } from './pages/nueva-contrasena/nueva-contrasena.component';
import { ContrasenaOlvidadaComponent } from './pages/contrasena-olvidada/contrasena-olvidada.component';
import { CodigoContrasenaComponent } from './pages/codigo-contrasena/codigo-contrasena.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'actividades',
    component: ActividadesComponent
  },
  {
    path: 'buddy-program',
    component: BuddyProgramComponent
  },
  {
    path: 'creador-actividades',
    component: CreadorActividadesComponent
  },
  {
    path: 'inicio-sesion',
    component: InicioSesionComponent
  },
  {
    path: 'mis-actividades',
    component: MisActividadesComponent
  },
  {
    path: 'perfil-usuario',
    component: PerfilUsuarioComponent
  },
  {
    path: 'recepcion-documentos',
    component: RecepcionDocumentosComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'voluntariado',
    component: VoluntariadoComponent
  },
  {
    path: 'contrasena-olvidada',
    component: ContrasenaOlvidadaComponent
  },
  {
    path: 'nueva-contrasena',
    component: NuevaContrasenaComponent
  },
  {
    path: 'codigo-contrasena',
    component: CodigoContrasenaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
