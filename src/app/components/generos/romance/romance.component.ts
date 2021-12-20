import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-romance',
  templateUrl: './romance.component.html',
  styleUrls: ['./romance.component.css'],
})
export class RomanceComponent implements OnInit {
  public peliculas = [
    {
      titulo: 'Me Before You',
      portada: 'https://m.media-amazon.com/images/I/51yVixqZzML._AC_.jpg',
    },
    {
      titulo: 'A Star is Born ',
      portada:
        'https://m.media-amazon.com/images/M/MV5BNmE5ZmE3OGItNTdlNC00YmMxLWEzNjctYzAwOGQ5ODg0OTI0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      titulo: 'About Time',
      portada:
        'https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg',
    },
    {
      titulo: 'La La Land',
      portada:
        'https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SL1500_.jpg',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
