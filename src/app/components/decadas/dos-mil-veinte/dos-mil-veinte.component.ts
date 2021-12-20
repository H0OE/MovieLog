import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos-mil-veinte',
  templateUrl: './dos-mil-veinte.component.html',
  styleUrls: ['./dos-mil-veinte.component.css'],
})
export class DosMilVeinteComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Candyman',
      portada:
        'https://i2.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/06/Candyman-poster.jpg?resize=800%2C1000&ssl=1',
    },
    {
      titulo: 'Spider-Man No way home',
      portada: 'https://img.ecartelera.com/noticias/fotos/66900/66992/2.jpg',
    },
    {
      titulo: 'Soul',
      portada:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d850d113733033.602da4f659b8f.jpg',
    },
    {
      titulo: 'Free Guy',
      portada:
        'https://cdn.shopify.com/s/files/1/0513/0613/5747/products/FreeGuy7_530x@2x.jpg?v=1627482061',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
