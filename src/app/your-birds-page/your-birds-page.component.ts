import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-your-birds-page',
  templateUrl: './your-birds-page.component.html',
  styleUrls: ['./your-birds-page.component.css']
})
export class YourBirdsPageComponent implements OnInit {
  loginUserData:any = {}

  //for creating a user
  createUserData: any = {
    username: '',
    password: '',
    admin: false
  }

  //  for logging in a user
  currentUser: any = {
    username: '',
    password: '',
    admin: false
  }

  loggedOutUser: any = {
    username: '',
    password: '',
    admin: false
  }


  loggedIn: boolean = false
  loggedOut: boolean = true

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {

  }


  //Creates a user
  createUser() {
    console.log(this.createUserData);
    this.auth.createUser(this.createUserData).subscribe()
  }

  //Get the logged in user
  getUser(): void {
    this.auth.getUser()
    .subscribe(user => this.currentUser = user)
    this.currentUser = this.currentUser.currentUser
    //console.log(this.currentUser);

  }

  //Login user
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe()
    this.getUser()
    // if (this.currentUser === undefined) {
    //   this.getUser()
    // } else {
    //   this.loggedIn = true
    // }
    // if (this.currentUser === undefined) {
    //   this.getUser()
    // } else {
    //   this.loggedIn = true
    // }
    this.loggedIn = true
  }

  logOut() {
    this.auth.logOut().subscribe()
    this.currentUser = this.loggedOutUser
    // console.log('loggedout user');
    // console.log(this.currentUser);
    this.loggedIn = false
  }


  //Create/login modal toggles
  loginShow = true;
  createShow = false;

  loginToggle() {
    this.loginShow = false;
    this.createShow = true;
  }

  createToggle() {
    this.loginShow = true;
    this.createShow = false;
  }

  close() {
    this.loginShow = true;
    this.createShow = false;
  }


}
