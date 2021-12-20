import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ochenta',
  templateUrl: './ochenta.component.html',
  styleUrls: ['./ochenta.component.css'],
})
export class OchentaComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Empire Strikes Back',
      portada:
        'https://m.media-amazon.com/images/I/814Cbv8EftL._AC_SL1200_.jpg',
    },
    {
      titulo: 'Back to the Future',
      portada:
        'https://pics.filmaffinity.com/Regreso_al_futuro-139415628-large.jpg',
    },
    {
      titulo: 'Aliens',
      portada: 'https://pics.filmaffinity.com/aliens-989223912-large.jpg',
    },
    {
      titulo: 'Amadeus',
      portada: 'https://pics.filmaffinity.com/Amadeus-718368517-large.jpg',
    },
    {
      titulo: 'Mi vecino Totoro',
      portada:
        'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/09/17/15687205415802.jpg',
    },
    {
      titulo: 'Terminator',
      portada: 'https://m.media-amazon.com/images/I/7124A8OOL6L._AC_SY679_.jpg',
    },
    {
      titulo: 'The Return of The Jedi',
      portada:
        'https://static.wikia.nocookie.net/esstarwars/images/b/b2/ReturnOfTheJediPoster1983.jpg',
    },
    {
      titulo: 'Cinema Paradiso',
      portada:
        'https://pics.filmaffinity.com/Cinema_Paradiso-225068665-large.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
