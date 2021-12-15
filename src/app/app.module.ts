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


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FavoritosComponent, DestacadosComponent, ConfiguracionComponent, HomeComponent, LoginComponent, SignupComponent, FiltrosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
