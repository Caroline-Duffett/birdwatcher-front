import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login = true;
  create = false;

  loginToggle() {
    this.login = false;
    this.create = true;
    console.log('loginToggle clicked');

  }

  createToggle() {
    this.login = true;
    this.create = false;
    console.log('createToggle clicked');
  }

  close() {
    this.login = true;
    this.create = false;
    console.log("close clicked");

  }

}
