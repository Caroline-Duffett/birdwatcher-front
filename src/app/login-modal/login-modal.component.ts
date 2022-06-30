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
//   createUser(create: any): void {
//     console.log(create);
//     console.log(create.form.value);
//
//
//     // const newUser = {
//     //   username: create.form.value.username,
//     //   password: create.form.value.password,
//     //   admin: create.from.value.admin
//     // }
//
//     const newUser = {
//       username: create.username,
//       password: create.password,
//       admin: create.admin
//     }
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




import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { Router } from '@angular/router';
import { User } from '../user';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  createUserData:any = {}
  loginUserData:any = {}


  // username: string = ''
  // password: string = ''
  // admin: boolean = false
  // usersBirds: Array<object> = []


  constructor(
    private auth: AuthService,
    //private router: Router
  ) { }

  ngOnInit(): void {
  }

  //31
  createUser() {
    console.log(this.createUserData);
    this.auth.createUser(this.createUserData).subscribe(
      // res => {
      //   //console.log(res);
      //   localStorage.setItem('token', res.token)
      //   //this.router.navigate(['/special'])
      // },
      //   //err => console.log(err);
    )
  }


  //34
  loginUser() {
    console.log(this.loginUserData);
    this.auth.loginUser(this.loginUserData).subscribe(
      // res => {
      //   //console.log(res);
      //   localStorage.setItem('token', res.token)
      //   //this.router.navigate(['/special'])
      // },
      //   //err => console.log(err);
    )
  }




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
