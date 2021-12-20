import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noventa',
  templateUrl: './noventa.component.html',
  styleUrls: ['./noventa.component.css'],
})
export class NoventaComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Pulp Fiction',
      portada: 'https://pics.filmaffinity.com/Pulp_Fiction-210382116-large.jpg',
    },
    {
      titulo: 'The Professional',
      portada:
        'https://pics.filmaffinity.com/El_profesional_L_on-557321821-large.jpg',
    },
    {
      titulo: "Schindler's List",
      portada:
        'https://pics.filmaffinity.com/La_lista_de_Schindler-473662617-large.jpg',
    },
    {
      titulo: 'La vida es bella',
      portada:
        'https://es.web.img3.acsta.net/medias/nmedia/18/67/61/66/20098979.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
