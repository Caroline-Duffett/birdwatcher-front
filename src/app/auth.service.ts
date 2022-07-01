import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'; //module that lets us error handle
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // getToken() {
  //   throw new Error('something went wrong')
  // }

  //URLs
  private createURL = 'http://localhost:3000/createaccount';
  // private loginURL = 'http://localhost:3000/login';
  private loginURL = 'http://localhost:3000/sessions';

  //tells it that we are an app and to read/send json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    //withCredentials: true //can't use this with cors
  };

  // //withCredentials
  // httpParams = {
  //   withCredentials: true
  // }


  constructor(
    private http: HttpClient
  ) { }

  //verison without USER and working with admin but not unique
  createUser(user: any) {
    return this.http.post<any>(this.createURL, user)
  }

  //add way
  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.createURL, user, this.httpOptions).pipe(catchError(this.handleError<User>('createUser')))
  // }



  //Not working
  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.createURL, user, this.httpOptions).pipe(catchError(this.handleError<User>('createUser')))
  // }

  // //Won't post (Error: data and salt arguments required)
  // createUser(user: User): Observable<User> {
  //   return this.http.post<User>(this.createURL, user).pipe(catchError(this.handleError<User>('createUser')))
  // }



  //version without USER
  // loginUser(user: any) {
  //   return this.http.post<any>(this.loginURL, user)
  // }

  //PUT
  // loginUser(user: any) {
  //   return this.http.put<any>(this.loginURL, user, this.httpOptions).pipe(catchError(this.handleError<any>('loginUser')))
  // }
  //
  // //POST
  // loginUser(user: any) {
  //   return this.http.post<any>(this.loginURL, user, this.httpOptions).pipe(catchError(this.handleError<any>('loginUser')))
  // }

  //not working
    // loginUser(user: any) {
    //   console.log(user);
    //   return this.http.post<any>(this.loginURL, user).pipe(catchError(this.handleError<any>('loginUser')))
    // }

    // loginUser(user: User) {
    //   return this.http.post<User>(this.loginURL, user).pipe(catchError(this.handleError<any>('loginUser')))
    // }

  //WORKING KINDA
    // loginUser(user: User): Observable<User>{
    //   return this.http.post<User>(this.loginURL, user, this.httpOptions).pipe(catchError(this.handleError<any>('loginUser')))
    //   //console.log(document.cookie);
    // }


    // loginUser(user: User): Observable<User>{
    //   console.log('loginUser function');
    //   console.log(user);
    //   return this.http.post<User>(this.loginURL, user, this.httpOptions).pipe(catchError(this.handleError<any>('loginUser')))
    // }

    loginUser(user: User): Observable<User>{
      console.log('loginUser function');
      console.log(user);
      return this.http.post<User>(this.loginURL, user, this.httpOptions).pipe(catchError(this.handleError<any>('loginUser')))
    }

    // withCredentials: true //(This NEEDS to go somewhere to get cookies on frontend I think)



    // loginUser(user: User): Observable<User>{
    //   return this.http.post<User>(this.loginURL, user).pipe(catchError(this.handleError<any>('loginUser')))
    //   //console.log(document.cookie);
    // }

    //Does not work
  // loginUser(user: User): Observable<User>{
  //   return this.http.post<User>(this.loginURL, user, this.httpOptions, {
  //     withCreidentials: true
  //   }).pipe(catchError(this.handleError<any>('loginUser')))
  // }




  // router.get('/createaccount', (req, res) => {
  //   Users.find({},  (err, foundUser) => {
  //     res.json(foundUser)
  //   })
  // })




  // loggedIn() {
  //   //return !!localStorage.getItem('token')
  //   console.log('logged in!');
  // }

  loggedIn() {
    //return !!localStorage.getItem('token')
    console.log('logged in!');
  }


  // getLoggedInUser() {
  //   this.http.get(this.loginURL)
  //   // this.http.get(environment.loginURL).subscribe((res: any) => {
  //   //   this.user.next(res.user);
  //   // }, (err) => {
  //   //   this.toastr.error('something went wrong')
  //   // })
  //   // console.log('logged in!');
  // }

  // getLoggedInUser() {
  //   this.http.get(this.loginURL)
  //   // this.http.get(environment.loginURL).subscribe((res: any) => {
  //   //   this.user.next(res.user);
  //   // }, (err) => {
  //   //   this.toastr.error('something went wrong')
  //   // })
  //   // console.log('logged in!');
  // }



  //--- Error handling
  // If http fails
  // Lets app continue
  /*
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }


}
