import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comedia',
  templateUrl: './comedia.component.html',
  styleUrls: ['./comedia.component.css'],
})
export class ComediaComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Hangover',
      portada: 'https://m.media-amazon.com/images/I/51-EPh6VZ8L._AC_.jpg',
    },
    {
      titulo: 'Ted',
      portada: 'https://m.media-amazon.com/images/I/61I7LUN5jXL._AC_SY679_.jpg',
    },
    {
      titulo: 'Rush Hour',
      portada:
        'https://m.media-amazon.com/images/I/61hn3gcwBvL._AC_SL1333_.jpg',
    },
    {
      titulo: 'Superbad',
      portada: 'https://m.media-amazon.com/images/I/517Ro9vnOML._AC_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
