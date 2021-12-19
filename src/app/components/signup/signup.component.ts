import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model = {
    user: '',
    pass: '',
  };
  constructor(private dialogRef: MatDialogRef<SignupComponent>) { }

  ngOnInit() {
  }
  onSubmit() {
    //console.log(this.model);
    this.dialogRef.close({ data: this.model });
  }
}