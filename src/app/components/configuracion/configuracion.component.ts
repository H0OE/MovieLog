import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css'],
})
export class ConfiguracionComponent implements OnInit {
  public username: string = 'User2';
  public oldPassword: string = '';
  public newPassword: string = '';
  public confirmPassword: string = '';

  constructor(private dialogRef: MatDialogRef<ConfiguracionComponent>) {}

  ngOnInit() {}

  model = {
    user: '',
    pass: '',
  };

  onSubmit() {
    //console.log(this.model);
    this.dialogRef.close({ data: this.model });
  }
}
