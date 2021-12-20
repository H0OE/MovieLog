import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesenta',
  templateUrl: './sesenta.component.html',
  styleUrls: ['./sesenta.component.css'],
})
export class SesentaComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'To Kill a Mockingbird',
      portada: 'https://m.media-amazon.com/images/I/51biQ1EK1hL._AC_.jpg',
    },
    {
      titulo: 'West Side Story',
      portada:
        'https://cdn.shopify.com/s/files/1/1755/9909/products/WestSideStoryokdisplay2_1024x1024.jpg?v=1608988010',
    },
    {
      titulo: 'The Umbrellas of Cherbourg',
      portada: 'https://m.media-amazon.com/images/I/5100hpM0y-L._AC_.jpg',
    },
    {
      titulo: 'Mary Poppins',
      portada: 'https://m.media-amazon.com/images/I/51rJLvRdSoL._AC_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
