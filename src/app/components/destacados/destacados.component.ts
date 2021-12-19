import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PeliculaComponent } from '../pelicula/pelicula.component';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent implements OnInit {

  public peliculas = [
    {
      titulo: 'The Simpsons Movie',
      descripcion: 'Homero en un descuido termina poniendo a todo springfield en peligro',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: ''

    },
    {
      titulo: 'The Simpsons Movie',
      portada:'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg',
      descripcion: 'Homero en un descuido termina poniendo a todo springfield en peligro'

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

  constructor(public dialogo: MatDialog) { }

  ngOnInit() {
  }

  openDialogDesc() {
    const dialogRef = this.dialogo.open(PeliculaComponent );


  }
}