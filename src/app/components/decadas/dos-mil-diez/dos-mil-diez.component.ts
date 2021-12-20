import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos-mil-diez',
  templateUrl: './dos-mil-diez.component.html',
  styleUrls: ['./dos-mil-diez.component.css'],
})
export class DosMilDiezComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Toy Story 3',
      portada: 'https://pics.filmaffinity.com/Toy_Story_3-148898222-large.jpg',
    },
    {
      titulo: 'Drive',
      portada:
        'https://image.posterlounge.com/img/products/640000/631103/631103_poster_l.jpg',
    },
    {
      titulo: 'The Avengers',
      portada: 'https://m.media-amazon.com/images/I/71xZtfOsHdL._AC_SY679_.jpg',
    },
    {
      titulo: 'Kaze tachinu',
      portada:
        'http://koi-nya.net/img/subidos_posts/2013/06/Kaze-Tachinu-6%C2%BA-p%C3%B3ster.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
