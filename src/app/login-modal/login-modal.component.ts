import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../user';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

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

  loggedIn:boolean = false


  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.getUser()
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
    //this.currentUser = this.currentUser.currentUser
    console.log('currentUser');
    //console.log(this.currentUser);

    this.currentUser = this.currentUser.currentUser
    console.log(this.currentUser);
  }

  //Login user
  loginUser() {
    this.loggedIn = true
    //console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData).subscribe()
    this.getUser()
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









//-------------------------- Graveyard ---------------------------//
//WORKING (kinda)
  // //34
  // loginUser() {
  //   console.log(this.loginUserData);
  //   this.auth.loginUser(this.loginUserData).subscribe(
  //     // res => {
  //     //   //console.log(res);
  //     //   localStorage.setItem('token', res.token)
  //     //   //this.router.navigate(['/special'])
  //     // },
  //     //   //err => console.log(err);
  //   )
  // }



  //--------------------------------------------------------------------------------- Posts but no admin ---//
  // import { Component, OnInit } from '@angular/core';
  // import { AuthService } from '../auth.service';
  // //import { Router } from '@angular/router';
  // import { User } from '../user';
  // import {FormsModule} from '@angular/forms';
  //
  // @Component({
  //   selector: 'app-login-modal',
  //   templateUrl: './login-modal.component.html',
  //   styleUrls: ['./login-modal.component.css']
  // })
  // export class LoginModalComponent implements OnInit {
  //   createUserData:any = {}
  //   loginUserData:any = {}
  //
  //
  //   // username: string = ''
  //   // password: string = ''
  //   // admin: boolean = false
  //   // usersBirds: Array<object> = []
  //
  //
  //   constructor(
  //     private auth: AuthService,
  //     //private router: Router
  //   ) { }
  //
  //   ngOnInit(): void {
  //   }
  //
  //   //31
  //   createUser() {
  //     console.log(this.createUserData);
  //     this.auth.createUser(this.createUserData).subscribe(
  //       // res => {
  //       //   //console.log(res);
  //       //   localStorage.setItem('token', res.token)
  //       //   //this.router.navigate(['/special'])
  //       // },
  //       //   //err => console.log(err);
  //     )
  //   }
  //
  //
  //   //34
  //   loginUser() {
  //     console.log(this.loginUserData);
  //     this.auth.loginUser(this.loginUserData).subscribe(
  //       // res => {
  //       //   //console.log(res);
  //       //   localStorage.setItem('token', res.token)
  //       //   //this.router.navigate(['/special'])
  //       // },
  //       //   //err => console.log(err);
  //     )
  //   }
  //
  //
  //
  //
  //   loginShow = true;
  //   createShow = false;
  //
  //   loginToggle() {
  //     this.loginShow = false;
  //     this.createShow = true;
  //   }
  //
  //   createToggle() {
  //     this.loginShow = true;
  //     this.createShow = false;
  //   }
  //
  //   close() {
  //     this.loginShow = true;
  //     this.createShow = false;
  //   }
  //
  // }
  //--------------------------------------------------------------------------------------------------------//






  // salt error (have server set to app.use(express.json))
  //----------------------------------------------------------------------------- Admin but does not post---//
  // import { Component, OnInit } from '@angular/core';
  // import { AuthService } from '../auth.service';
  // //import { Router } from '@angular/router';
  // import { User } from '../user';
  // import {FormsModule} from '@angular/forms';
  //
  // @Component({
  //   selector: 'app-login-modal',
  //   templateUrl: './login-modal.component.html',
  //   styleUrls: ['./login-modal.component.css']
  // })
  // export class LoginModalComponent implements OnInit {
  //   // createUserData:any = {}
  //   loginUserData:any = {}
  //
  //
  //   username: string = ''
  //   password: string = ''
  //   admin: boolean = false
  //
  //
  //   constructor(
  //     private auth: AuthService,
  //     //private router: Router
  //   ) { }
  //
  //   ngOnInit(): void {
  //   }
  //
  //   //31
  // createUser(create: any): void {
  //   console.log(create);
  //   console.log(create.form.value);
  //
  //
  //   // const newUser = {
  //   //   username: create.form.value.username,
  //   //   password: create.form.value.password,
  //   //   admin: create.from.value.admin
  //   // }
  //
  //   const newUser = {
  //     username: create.username,
  //     password: create.password,
  //     admin: create.admin
  //   }
  //
  //   this.auth.createUser(newUser as User).subscribe(
  //     () => {this}
  //   )
  // }
  //
  //
  //
  //
  //
  //
  //   //34
  //   loginUser() {
  //     console.log(this.loginUserData);
  //     this.auth.loginUser(this.loginUserData).subscribe(
  //       // res => {
  //       //   //console.log(res);
  //       //   localStorage.setItem('token', res.token)
  //       //   //this.router.navigate(['/special'])
  //       // },
  //       //   //err => console.log(err);
  //     )
  //   }
  //
  //
  //
  //
  //   loginShow = true;
  //   createShow = false;
  //
  //   loginToggle() {
  //     this.loginShow = false;
  //     this.createShow = true;
  //   }
  //
  //   createToggle() {
  //     this.loginShow = true;
  //     this.createShow = false;
  //   }
  //
  //   close() {
  //     this.loginShow = true;
  //     this.createShow = false;
  //   }
  //
  // }
  //--------------------------------------------------------------------------------------------------------//



  //----------------------------------------------------------------------------- Works but user is not unique ---//
  // import { Component, OnInit } from '@angular/core';
  // import { AuthService } from '../auth.service';
  // //import { Router } from '@angular/router';
  // import { User } from '../user';
  // import {FormsModule} from '@angular/forms';
  //
  // @Component({
  //   selector: 'app-login-modal',
  //   templateUrl: './login-modal.component.html',
  //   styleUrls: ['./login-modal.component.css']
  // })
  // export class LoginModalComponent implements OnInit {
  //   //createUserData:any = {}
  //   loginUserData:any = {}
  //
  //   createUserData: any = {
  //     username: '',
  //     password: '',
  //     admin: false
  //   }
  //
  //   // username: string = ''
  //   // password: string = ''
  //   // admin: boolean = false
  //   // usersBirds: Array<object> = []
  //
  //
  //   constructor(
  //     private auth: AuthService,
  //     //private router: Router
  //   ) { }
  //
  //   ngOnInit(): void {
  //   }
  //
  //   //31
  //   createUser() {
  //     console.log(this.createUserData);
  //     this.auth.createUser(this.createUserData).subscribe(
  //       // res => {
  //       //   //console.log(res);
  //       //   localStorage.setItem('token', res.token)
  //       //   //this.router.navigate(['/special'])
  //       // },
  //       //   //err => console.log(err);
  //     )
  //   }
  //
  //
  //   //34
  //   loginUser() {
  //     console.log(this.loginUserData);
  //     this.auth.loginUser(this.loginUserData).subscribe(
  //       // res => {
  //       //   //console.log(res);
  //       //   localStorage.setItem('token', res.token)
  //       //   //this.router.navigate(['/special'])
  //       // },
  //       //   //err => console.log(err);
  //     )
  //   }
  //
  //
  //
  //
  //   loginShow = true;
  //   createShow = false;
  //
  //   loginToggle() {
  //     this.loginShow = false;
  //     this.createShow = true;
  //   }
  //
  //   createToggle() {
  //     this.loginShow = true;
  //     this.createShow = false;
  //   }
  //
  //   close() {
  //     this.loginShow = true;
  //     this.createShow = false;
  //   }
  //
  // }
  //----------------------------------------------------------------------------- Works but user is not unique ---//


  //--------------------------------------------------------------------------- Can't post but shows form info ---//
  // import { Component, OnInit } from '@angular/core';
  // import { AuthService } from '../auth.service';
  // import { User } from '../user';
  // import {FormsModule} from '@angular/forms';
  //
  // @Component({
  //   selector: 'app-login-modal',
  //   templateUrl: './login-modal.component.html',
  //   styleUrls: ['./login-modal.component.css']
  // })
  // export class LoginModalComponent implements OnInit {
  //   //createUserData:any = {}
  //   loginUserData:any = {}
  //
  //   // createUserData: any = {
  //   //   username: '',
  //   //   password: '',
  //   //   admin: false
  //   // }
  //
  //   username: string = ''
  //   password: string = ''
  //   admin: boolean = false
  //
  //
  //   constructor(
  //     private auth: AuthService,
  //     private formsModule: FormsModule
  //   ) { }
  //
  //   ngOnInit(): void {
  //   }
  //
  //   // //31
  //   // createUser() {
  //   //   console.log(this.createUserData);
  //   //   this.auth.createUser(this.createUserData).subscribe(
  //   //     // res => {
  //   //     //   //console.log(res);
  //   //     //   localStorage.setItem('token', res.token)
  //   //     //   //this.router.navigate(['/special'])
  //   //     // },
  //   //     //   //err => console.log(err);
  //   //   )
  //   // }
  //
  //
  //   //31
  //   createUser(create: any): void {
  //     console.log(create);
  //     console.log(create.form.value);
  //
  //
  //     const newUser = {
  //       username: create.form.value.username,
  //       password: create.form.value.password,
  //       admin: create.from.value.admin
  //     }
  //
  //     // const newUser = {
  //     //   username: create.username,
  //     //   password: create.password,
  //     //   admin: create.admin
  //     // }
  //
  //     this.auth.createUser(newUser as User).subscribe(
  //       () => {this}
  //     )
  //   }
  //
  //
  //
  //
  //
  //
  //
  //
  //   //34
  //   loginUser() {
  //     console.log(this.loginUserData);
  //     this.auth.loginUser(this.loginUserData).subscribe(
  //       // res => {
  //       //   //console.log(res);
  //       //   localStorage.setItem('token', res.token)
  //       //   //this.router.navigate(['/special'])
  //       // },
  //       //   //err => console.log(err);
  //     )
  //   }
  //
  //
  //
  //   //modal toggles
  //     loginShow = true;
  //     createShow = false;
  //
  //     loginToggle() {
  //       this.loginShow = false;
  //       this.createShow = true;
  //     }
  //
  //     createToggle() {
  //       this.loginShow = true;
  //       this.createShow = false;
  //     }
  //
  //     close() {
  //       this.loginShow = true;
  //       this.createShow = false;
  //     }
  //
  // }
  //--------------------------------------------------------------------------- Can't post but shows form info ---//




  //Does not work
  // if (this.loginUserData === '' || this.loginUserData === undefined) {
  //   this.loggedIn === false
  //   console.log('setting false');
  // } else {
  //   this.loggedIn === true
  //   console.log('setting true');
  //
  // }
