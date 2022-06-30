import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // getToken() {
  //   throw new Error('something went wrong')
  // }

  private createURL = 'http://localhost:3000/createaccount';
  private loginURL = 'http://localhost:3000/login';


  constructor(
    private http: HttpClient
  ) { }

  createUser(user: any) {
    return this.http.post<any>(this.createURL, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this.loginURL, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }


}
