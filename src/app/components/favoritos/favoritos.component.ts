import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Simpsons Movie',
      descripcion: '',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: ''

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg'

    }
  ]
  constructor() { }

  ngOnInit() {
  }

}