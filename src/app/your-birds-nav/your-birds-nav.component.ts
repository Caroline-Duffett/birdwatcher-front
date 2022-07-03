import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-birds-nav',
  templateUrl: './your-birds-nav.component.html',
  styleUrls: ['./your-birds-nav.component.css']
})
export class YourBirdsNavComponent implements OnInit {

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
