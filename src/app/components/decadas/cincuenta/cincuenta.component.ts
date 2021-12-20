import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cincuenta',
  templateUrl: './cincuenta.component.html',
  styleUrls: ['./cincuenta.component.css'],
})
export class CincuentaComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Sunset Boulevard',
      portada:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sunset_Boulevard_%281950_poster%29.jpg/399px-Sunset_Boulevard_%281950_poster%29.jpg',
    },
    {
      titulo: "Singin' In The rain",
      portada: 'https://m.media-amazon.com/images/I/71ezA8BPTzL._AC_UY445_.jpg',
    },
    {
      titulo: 'High Noon',
      portada:
        'https://m.media-amazon.com/images/M/MV5BOWIzZGUxZmItOThkMS00Y2QxLTg0MTYtMDdhMjRlNTNlYTI3L2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
    },
    {
      titulo: 'Stalag 17',
      portada: 'https://m.media-amazon.com/images/I/51H+YXpgmTL._AC_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
