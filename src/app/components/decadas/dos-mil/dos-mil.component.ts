import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos-mil',
  templateUrl: './dos-mil.component.html',
  styleUrls: ['./dos-mil.component.css'],
})
export class DosMilComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'SHERK 2',
      portada: 'https://m.media-amazon.com/images/I/51h73qlasJL._AC_.jpg',
    },
    {
      titulo: 'The Lord of Rings',
      portada:
        'https://pics.filmaffinity.com/El_se_or_de_los_anillos_Las_dos_torres-465612238-large.jpg',
    },
    {
      titulo: 'FANTASTIC MR FOX',
      portada:
        'https://m.media-amazon.com/images/I/81QQk5dgNML._AC_SL1500_.jpg',
    },
    {
      titulo: 'KUNG FU SION',
      portada:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw5kZ9qnrfb5BLOLz6UCub09VSis91E-lFIA&usqp=CAU',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
