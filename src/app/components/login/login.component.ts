import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model = {
    user: '',
    pass: '',
  };
  placeUser='Ingresar Usuario'
  placePass='Ingresar Contraseña'

  constructor(private dialogRef: MatDialogRef<LoginComponent>) {}

  ngOnInit() {}

  onSubmit() {
    //console.log(this.model);
    
    if (this.model.user=='' ){
      console.log("err")

      document.getElementById("userInput").className = "inputError";
      this.placeUser='Ingrese usuario'


    } if(this.model.pass==''){
      document.getElementById("passInput").className = "inputError";
      this.placePass='Ingrese contraseña'

    }
    if(this.model.pass!='' && this.model.user!=''){
      this.dialogRef.close({ data: this.model });
    }  }
}
