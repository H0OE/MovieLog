import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accion',
  templateUrl: './accion.component.html',
  styleUrls: ['./accion.component.css'],
})
export class AccionComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Mortal Kombat',
      portada:
        'https://fanaticosdelhardware.com/wp-content/uploads/2021/02/Mortal-Kombat-Poster-Oficial-1-1.jpg',
    },
    {
      titulo: 'Monster Hunter',
      portada:
        'https://i0.wp.com/pcmrace.s3.amazonaws.com/2020/11/EkSwo9WXYAAqEqB-scaled-1.jpg?ssl=1',
    },
    {
      titulo: 'El otro guardaespaldas 2',
      portada:
        'https://www.diariodevenusville.com/wp-content/uploads/2021/06/EL-OTRO-GUARDAESPALDAS-2-personaje-1.jpg',
    },
    {
      titulo: 'Snake Eyes: El origen',
      portada:
        'https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/07/snake-eyes-Poster-2.jpg?resize=800%2C1185&ssl=1',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
