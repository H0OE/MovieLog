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
import { SesentaComponent } from './components/decadas/sesenta/sesenta.component';
import { CincuentaComponent } from './components/decadas/cincuenta/cincuenta.component';
import { SetentaComponent } from './components/decadas/setenta/setenta.component';
import { OchentaComponent } from './components/decadas/ochenta/ochenta.component';
import { NoventaComponent } from './components/decadas/noventa/noventa.component';
import { DosMilComponent } from './components/decadas/dos-mil/dos-mil.component';
import { DosMilDiezComponent } from './components/decadas/dos-mil-diez/dos-mil-diez.component';
import { DosMilVeinteComponent } from './components/decadas/dos-mil-veinte/dos-mil-veinte.component';

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
    path: 'Acción',
    component: AccionComponent,
  },
  {
    path: 'Animadas',
    component: AnimadasComponent,
  },
  {
    path: 'Ciencia Ficción',
    component: CienciaFiccionComponent,
  },
  {
    path: 'Comedia',
    component: ComediaComponent,
  },
  {
    path: 'Misterio',
    component: MisterioComponent,
  },
  {
    path: 'Romance',
    component: RomanceComponent,
  },
  {
    path: 'Terror',
    component: TerrorComponent,
  },
  {
    path: "50's",
    component: CincuentaComponent,
  },
  {
    path: "60's",
    component: SesentaComponent,
  },
  {
    path: "70's",
    component: SetentaComponent,
  },
  {
    path: "80's",
    component: OchentaComponent,
  },
  {
    path: "90's",
    component: NoventaComponent,
  },
  {
    path: "2000's",
    component: DosMilComponent,
  },
  {
    path: "2010's",
    component: DosMilDiezComponent,
  },
  {
    path: "2020's",
    component: DosMilVeinteComponent,
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
    CincuentaComponent,
    SesentaComponent,
    SetentaComponent,
    OchentaComponent,
    NoventaComponent,
    DosMilComponent,
    DosMilDiezComponent,
    DosMilVeinteComponent,
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, SignupComponent],
})
export class AppModule {}
