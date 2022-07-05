import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersBirds } from '../usersbirds';
import { UsersbirdsService } from '../usersbirds.service';
import { AuthService } from '../auth.service';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-your-birds-page',
  templateUrl: './your-birds-page.component.html',
  styleUrls: ['./your-birds-page.component.css']
})
export class YourBirdsPageComponent implements OnInit {

    //----- User auth ------//
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



    //----- Users Birds Index ------//
  usersBirds: UsersBirds[] = []



  constructor(
    private auth: AuthService,
    private usersBirdService: UsersbirdsService
  ) { }

  ngOnInit(): void {
    this.getUsersBirds()
  }


  //----- User auth ------//
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
    this.loggedOut = false
    // this.getUsersBirds()
  }

  // loginFunc() {
  //   this.loginUser()
  //   this.loginUser()
  //   // this.loginUser()
  //   this.getUser()
  // }

  logOut() {
    this.auth.logOut().subscribe()
    this.currentUser = this.loggedOutUser
    // console.log('loggedout user');
    // console.log(this.currentUser);
    this.loggedIn = false
    this.loggedOut = true
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


    //----- Users Birds Index ------//
    getUsersBirds(): void {
      this.usersBirdService.getUsersBirds()

    }

}
