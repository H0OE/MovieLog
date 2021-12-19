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

@NgModule({
  imports: [BrowserModule, FormsModule, MatDialogModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    FavoritosComponent,
    DestacadosComponent,
    ConfiguracionComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FiltrosComponent,
    SafePipe
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,SignupComponent
  ]
})
export class AppModule {}
