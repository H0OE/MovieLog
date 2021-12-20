import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
})
export class FavoritosComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'The Simpsons Movie',
      descripcion: '',
      portada: 'https://flxt.tmsimg.com/assets/p166206_p_v13_ao.jpg',
      portada2: 'https://superfanatico.files.wordpress.com/2012/05/2266997.jpg',
      trailer: '',
    },
    {
      titulo: 'Lilo & Stitch',
      portada:'https://lumiere-a.akamaihd.net/v1/images/p_liloandstitch_19755_0ba5c55e.jpeg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
