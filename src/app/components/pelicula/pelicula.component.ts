import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  peliculaSrc:string ="https://www.youtube.com/embed/CxPwGkR0490"
  descripcion:string="Aqui va una descripcion"
  imgSrc:string=""

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<PeliculaComponent>) {
    
    console.log(this.data)
    this.peliculaSrc = this.data.trailer
    this.imgSrc = this.data.portada
    this.descripcion = this.data.descripcion
   }

  ngOnInit() {
  }

}