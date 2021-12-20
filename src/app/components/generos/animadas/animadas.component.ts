import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animadas',
  templateUrl: './animadas.component.html',
  styleUrls: ['./animadas.component.css'],
})
export class AnimadasComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Simpsons Movie',
      descripcion: '',
      portada: 'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: '',
    },
    {
      titulo: 'The Spongebob Squarepants',
      portada:
        'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a80f8fb941042016cb0a82700542c0d105fe9c741ebcddd1d413bc92a9990273._RI_V_TTW_.jpg',
    },
    {
      titulo: 'Lilo & Stitch',
      portada:
        'https://lumiere-a.akamaihd.net/v1/images/p_liloandstitch_19755_0ba5c55e.jpeg',
    },
    {
      titulo: 'Toy Story',
      portada: 'https://m.media-amazon.com/images/I/81Uyu1+diXL._AC_SY679_.jpg',
    },
    {
      titulo: 'Shrek',
      portada: 'https://m.media-amazon.com/images/I/71HPEO8IJTL._AC_SY679_.jpg',
    },
    {
      titulo: 'Your name',
      portada: 'https://m.media-amazon.com/images/I/713l9tM0sKL._AC_SY606_.jpg',
    },
    {
      titulo: 'Ernest & Celestine',
      portada:
        'https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm656-ermes-and-celestine-movie-film-posteri-1000x1000.jpg',
    },
    {
      titulo: 'Song of the Sea',
      portada: 'https://m.media-amazon.com/images/I/51ufg9+4-8L._AC_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
