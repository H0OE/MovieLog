import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciencia-ficcion',
  templateUrl: './ciencia-ficcion.component.html',
  styleUrls: ['./ciencia-ficcion.component.css'],
})
export class CienciaFiccionComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Metrópolis',
      portada:
        'https://images.fineartamerica.com/images-medium-large-5/poster-from-the-film-metropolis-1927-anonymous.jpg',
    },
    {
      titulo: 'Solaris ',
      portada: 'https://m.media-amazon.com/images/I/51zSAPm85jL._AC_.jpg',
    },
    {
      titulo: 'Blade Runner',
      portada:
        'https://m.media-amazon.com/images/I/71NPmBOdq7L._AC_SL1333_.jpg',
    },
    {
      titulo: 'La cosa',
      portada:
        'https://i.blogs.es/f65390/the-thing-teaser-poster-2011/450_1000.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
