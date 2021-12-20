import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terror',
  templateUrl: './terror.component.html',
  styleUrls: ['./terror.component.css'],
})
export class TerrorComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'IT',
      portada:
        'https://i5.walmartimages.com/asr/8dfecc7f-aa5a-4517-8c60-e2921f4b500e.c843d9ced81cad64830458a0722dfe90.jpeg',
    },
    {
      titulo: 'Saw',
      portada:
        'https://upload.wikimedia.org/wikipedia/en/5/56/Saw_official_poster.jpg',
    },
    {
      titulo: 'The Shining',
      portada: 'https://m.media-amazon.com/images/I/51ZssO+m8vL._AC_.jpg',
    },
    {
      titulo: 'Us',
      portada:
        'https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
