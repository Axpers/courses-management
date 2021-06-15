import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  userPassword: string;
  hidePassword = true;

  constructor() {
  }

  ngOnInit(): void {
    this.resetUserInformation();
  }

  submitCourse() {
    console.log('Login submited');
    this.resetUserInformation();
  }


  resetUserInformation() {
    this.userName = '';
    this.userPassword = '';
  }
}
