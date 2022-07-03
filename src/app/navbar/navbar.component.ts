import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  loggedin = true;
  loggedout = false;

  // loggedin = false;
  // loggedout = true;

  logOut() {
    this.authService.logOut().subscribe()
  }

}
