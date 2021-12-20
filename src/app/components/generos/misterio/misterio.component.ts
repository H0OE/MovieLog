import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-misterio',
  templateUrl: './misterio.component.html',
  styleUrls: ['./misterio.component.css'],
})
export class MisterioComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Psycho',
      portada:
        'https://es.web.img3.acsta.net/r_1280_720/pictures/bzp/03/1603.jpg',
    },
    {
      titulo: 'Origen',
      portada: 'https://www.cineycine.com/archivos/2013/11/origen-poster.jpg',
    },
    {
      titulo: 'The Others',
      portada:
        'https://es.web.img2.acsta.net/r_1280_720/pictures/16/02/08/16/49/422992.jpg',
    },
    {
      titulo: 'Argo',
      portada: 'https://m.media-amazon.com/images/I/51pDMATaK2L._AC_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
