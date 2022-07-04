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
  }

  createToggle() {
    this.login = true;
    this.create = false;
  }

  close() {
    this.login = true;
    this.create = false;
  }

}
