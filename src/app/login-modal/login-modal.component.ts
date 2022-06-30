import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { Router } from '@angular/router';

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
      res => {
        //console.log(res);
        localStorage.setItem('token', res.token)
        //this.router.navigate(['/special'])
      },
        //err => console.log(err);
    )
  }


  //34
  loginUser() {
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        //console.log(res);
        localStorage.setItem('token', res.token)
        //this.router.navigate(['/special'])
      },
        //err => console.log(err);
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
