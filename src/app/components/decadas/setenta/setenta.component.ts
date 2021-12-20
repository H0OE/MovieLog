import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setenta',
  templateUrl: './setenta.component.html',
  styleUrls: ['./setenta.component.css'],
})
export class SetentaComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Godfather',
      portada:
        'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      titulo: 'Apocalypse Now',
      portada:
        'https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    },
    {
      titulo: 'Star Wars',
      portada:
        'https://m.media-amazon.com/images/I/81dzcTzB1PL._AC_SL1500_.jpg',
    },
    {
      titulo: 'Alien',
      portada: 'https://m.media-amazon.com/images/I/41ltBoq45nL._AC_.jpg',
    },
    {
      titulo: 'Rocky',
      portada:
        'https://m.media-amazon.com/images/I/61SZsZYtwcL._AC_SL1001_.jpg',
    },
    {
      titulo: 'Taxi Driver',
      portada: 'https://m.media-amazon.com/images/I/81oapdOFgVL._AC_SY741_.jpg',
    },
    {
      titulo: 'Clockwork Orange',
      portada: 'https://m.media-amazon.com/images/I/71TUj3olRXL._AC_SY741_.jpg',
    },
    {
      titulo: 'Chinatown',
      portada: 'https://m.media-amazon.com/images/I/51TYOt-qGqL._AC_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
