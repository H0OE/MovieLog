import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { DestacadosComponent } from './components/destacados/destacados.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SafePipe } from './components/safe.pipe';

import { RouterModule, Routes } from '@angular/router';
import { AccionComponent } from './components/generos/accion/accion.component';
import { AnimadasComponent } from './components/generos/animadas/animadas.component';
import { CienciaFiccionComponent } from './components/generos/ciencia-ficcion/ciencia-ficcion.component';
import { ComediaComponent } from './components/generos/comedia/comedia.component';
import { MisterioComponent } from './components/generos/misterio/misterio.component';
import { RomanceComponent } from './components/generos/romance/romance.component';
import { TerrorComponent } from './components/generos/terror/terror.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'destacados',
    pathMatch: 'full',
  },
  {
    path: 'favoritos',
    component: FavoritosComponent,
  },
  {
    path: 'destacados',
    component: DestacadosComponent,
  },
  {
    path: 'accion',
    component: AccionComponent,
  },
  {
    path: 'animadas',
    component: AnimadasComponent,
  },
  {
    path: 'ciencia-ficcion',
    component: CienciaFiccionComponent,
  },
  {
    path: 'comedia',
    component: ComediaComponent,
  },
  {
    path: 'misterio',
    component: MisterioComponent,
  },
  {
    path: 'romance',
    component: RomanceComponent,
  },
  {
    path: 'terror',
    component: TerrorComponent,
  },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    FavoritosComponent,
    DestacadosComponent,
    ConfiguracionComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FiltrosComponent,
    SafePipe,
    AccionComponent,
    AnimadasComponent,
    CienciaFiccionComponent,
    ComediaComponent,
    MisterioComponent,
    RomanceComponent,
    TerrorComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent],
})
export class AppModule {}
