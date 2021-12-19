import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public isUserLogin: boolean = true;
  public txtbuscado: string = '';

  public menu1active = false;
  public menu2active = false;
  public menu3active = false;

  public generos= [

    {
      nombre: 'Terror',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/920852901113507850/icons8-ghost-64.png'
    },
    {
      nombre: 'Animadas',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/920852943811526676/icons8-homer-simpson-80_1.png'
    },
    {
      nombre: 'Comedia',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/921127911526920202/icons8-comedy-2-50.png'
    },
    {
      nombre: 'Romance',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/920852901629427752/icons8-romance-50_1.png'
    },
    {
      nombre: 'Acción',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/920852902917058580/icons8-assault-rifle-50.png'
    },
    {
      nombre: 'Ciencia Ficción',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/920852901927211018/icons8-sci-fi-50.png'
    },
    {
      nombre: 'Misterio',
      imagen:'https://cdn.discordapp.com/attachments/690325769234415646/920852943580856360/icons8-spy-50.png'
    }


  ]

  public decadas=[
    {
      nombre: '50\'s'
    },
    {
      nombre: '60\'s'
    },
    {
      nombre: '70\'s'
    },
    {
      nombre: '80\'s'
    },
    {
      nombre: '90\'s'
    },
    {
      nombre: '2000\'s'
    },
    {
      nombre: '2010\'s'
    },
    {
      nombre: '2020\'s'
    }
  ]

  public userOptions=[
    {
      nombre: 'Configuración',
      imagen: 'https://cdn.discordapp.com/attachments/690325769234415646/920852900853481472/icons8-automation-50.png'
    },
    {
      nombre: 'LogOut',
      imagen: 'https://cdn.discordapp.com/attachments/690325769234415646/920852943081730118/icons8-logout-58.png',
      style: 'color: #FF3D27'
    }
  ]


  constructor() {}

  ngOnInit() {}

  buscar(){
    if(this.txtbuscado != ''){
      console.log(this.txtbuscado)
    }

  }

  filtro(filt: number){

    if(filt==2){
      document.getElementsByClassName('menu2')[0].classList.toggle('hide')
      document.getElementsByClassName('hov')[2].classList.toggle('selected')
      this.menu2active = !this.menu2active
      if(this.menu1active){
        document.getElementsByClassName('hov')[1].classList.toggle('selected')
        document.getElementsByClassName('menu1')[0].classList.toggle('hide')
        this.menu1active = !this.menu1active
      }
      if(this.menu3active){
        //document.getElementsByClassName('hov')[1].classList.toggle('selected')
        document.getElementsByClassName('menu3')[0].classList.toggle('hide')
        this.menu3active = !this.menu3active
      }
    }
    if(filt==1){
      document.getElementsByClassName('hov')[1].classList.toggle('selected')
      document.getElementsByClassName('menu1')[0].classList.toggle('hide')
      this.menu1active = !this.menu1active
      if(this.menu2active){
        document.getElementsByClassName('hov')[2].classList.toggle('selected')
        document.getElementsByClassName('menu2')[0].classList.toggle('hide')
        this.menu2active = !this.menu2active
      }
      if(this.menu3active){
        //document.getElementsByClassName('hov')[1].classList.toggle('selected')
        document.getElementsByClassName('menu3')[0].classList.toggle('hide')
        this.menu3active = !this.menu3active
      }
    }

    if(filt==3){
      //document.getElementsByClassName('hov')[1].classList.toggle('selected')
      document.getElementsByClassName('menu3')[0].classList.toggle('hide')
      this.menu3active = !this.menu3active

      if(this.menu2active){
        document.getElementsByClassName('hov')[2].classList.toggle('selected')
        document.getElementsByClassName('menu2')[0].classList.toggle('hide')
        this.menu2active = !this.menu2active
      }
      if(this.menu1active){
        document.getElementsByClassName('hov')[1].classList.toggle('selected')
        document.getElementsByClassName('menu1')[0].classList.toggle('hide')
        this.menu1active = !this.menu1active
      }
    }
  }
}
