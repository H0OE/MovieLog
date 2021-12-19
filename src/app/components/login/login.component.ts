import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log(this.model);
  }
}
