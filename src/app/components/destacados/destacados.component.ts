import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

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