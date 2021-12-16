import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isUserLogin: boolean = false;
  public txtbuscado: string = '';

  public menu1active = false;
  public menu2active = false;

  constructor(public dialogo: MatDialog) {}

  public generos = [
    {
      nombre: 'Terror',
      imagen:
        'https://cdn.discordapp.com/attachments/690325769234415646/920852901113507850/icons8-ghost-64.png',
    },
    {
      nombre: 'Comedia',
      imagen:
        'https://cdn.discordapp.com/attachments/690325769234415646/920852943811526676/icons8-homer-simpson-80_1.png',
    },
    {
      nombre: 'Romance',
      imagen:
        'https://cdn.discordapp.com/attachments/690325769234415646/920852901629427752/icons8-romance-50_1.png',
    },
    {
      nombre: 'Acción',
      imagen:
        'https://cdn.discordapp.com/attachments/690325769234415646/920852902917058580/icons8-assault-rifle-50.png',
    },
    {
      nombre: 'Ciencia Ficción',
      imagen:
        'https://cdn.discordapp.com/attachments/690325769234415646/920852901927211018/icons8-sci-fi-50.png',
    },
    {
      nombre: 'Misterio',
      imagen:
        'https://cdn.discordapp.com/attachments/690325769234415646/920852943580856360/icons8-spy-50.png',
    },
  ];

  public decadas = [
    {
      nombre: "50's",
    },
    {
      nombre: "60's",
    },
    {
      nombre: "70's",
    },
    {
      nombre: "80's",
    },
    {
      nombre: "90's",
    },
    {
      nombre: "2000's",
    },
    {
      nombre: "2010's",
    },
    {
      nombre: "2020's",
    },
  ];


  ngOnInit() {}

  buscar() {
    if (this.txtbuscado != '') {
      console.log(this.txtbuscado);
    }
  }

  filtro(filt: number) {
    if (filt == 2) {
      document.getElementsByClassName('menu2')[0].classList.toggle('hide');
      this.menu2active = !this.menu2active;
      if (this.menu1active) {
        document.getElementsByClassName('menu1')[0].classList.toggle('hide');
        this.menu1active = !this.menu1active;
      }
    }
    if (filt == 1) {
      document.getElementsByClassName('menu1')[0].classList.toggle('hide');
      this.menu1active = !this.menu1active;
      if (this.menu2active) {
        document.getElementsByClassName('menu2')[0].classList.toggle('hide');
        this.menu2active = !this.menu2active;
      }
    }
  }

  openDialog() {
    this.dialogo.open(SignupComponent);
    console.log('open Dialog');
  }
}
