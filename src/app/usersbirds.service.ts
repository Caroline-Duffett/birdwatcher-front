import { Injectable } from '@angular/core';
import { UsersBirds } from './usersbirds';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersbirdsService {

  //URLs
  private usersBirdsURL = 'http://localhost:3000/usersbirds'
  // private usersusersBirdsURL = 'https://bird-watcher-back.herokuapp.com/usersbirds'


  //tells it that we are an app and to read/send json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }


  // GET brids (index) from the server
  getUsersBirds(): Observable<UsersBirds[]> {
    return this.http.get<UsersBirds[]>(this.usersBirdsURL)
      .pipe(
        //tap(_ => this.log('fetched birds')),
        catchError(this.handleError<UsersBirds[]>('getUsersBirds', []))
      );
  }


  /// GET bird (show) by id. Will return `undefined` if id is not found. How the 404 error gets displayed
  getUsersBirdNo404<Data>(_id: string): Observable<UsersBirds> {
    const url = `${this.usersBirdsURL}/?id=${_id}`;
    return this.http.get<UsersBirds[]>(url)
      .pipe(
        map(usersBirds => usersBirds[0]), // returns a {0|1} element array
        // tap(h => {
        //   const outcome = h ? 'fetched' : 'did not find';
        //   this.log(`${outcome} bird id=${id}`);
        // }),
        catchError(this.handleError<UsersBirds>(`getUsersBird id=${_id}`))
      );
  }


  // GET bird (show) by id. Will 404 if id not found
  getUsersBird(_id: string): Observable<UsersBirds> {
    const url = `${this.usersBirdsURL}/${_id}`;
    return this.http.get<UsersBirds>(url).pipe(
      //tap(_ => this.log(`fetched bird id=${id}`)),
      catchError(this.handleError<UsersBirds>(`getUsersBird id=${_id}`))
    );
  }


  // //Search
  // searchBirdsName(term: string): Observable<UsersBirds[]> {
  //   if (!term.trim()) {
  //     return of([])
  //   } else {
  //     return this.http.get<UsersBirds[]>(this.usersBirdsURL)
  //       .pipe(
  //         //tap(_ => this.log('fetched birds')),
  //         catchError(this.handleError<UsersBirds[]>('searchBirdsName', []))
  //       );
  //   }
  // }


  // //***
  // //Search GET Birds with name in search term
  // searchBirds(term: string): Observable<UsersBirds[]> {
  //   if (!term.trim()) {
  //     return of([]); // if no search results return and empty birds array
  //   }
  //   return this.http.get<UsersBirds[]>(`${this.usersBirdsURL}/?name=${term}`).pipe(
  //     // tap(x => x.length ?
  //     //    this.log(`found birds matching "${term}"`) :
  //     //    this.log(`no birds matching "${term}"`)),
  //     catchError(this.handleError<UsersBirds[]>('searchBirds', []))
  //   );
  // }
  // //***




  //POST add a new bird to the server, (no errors)
  addUsersBird(usersBird: UsersBirds): Observable<UsersBirds> {
    return this.http.post<UsersBirds>(this.usersBirdsURL, usersBird, this.httpOptions).pipe(
      //tap((newBird: Bird) => this.log(`added bird with id=${newBird._id}`)),
      catchError(this.handleError<UsersBirds>('addBird'))
    );
  }


  // //DELETE the bird from the server
  deleteUersBird(_id: string): Observable<UsersBirds> {
    const url = `${this.usersBirdsURL}/${_id}`;
    return this.http.delete<UsersBirds>(url, this.httpOptions).pipe(
      //tap(_ => this.log(`deleted bird id=${id}`)),
      catchError(this.handleError<UsersBirds>('deleteUsersBird'))
    );
  }


  //PUT update the bird on the server
  updateUersBird(usersBird: UsersBirds): Observable<any> {
    const id = usersBird._id;
    const url = `${this.usersBirdsURL}/${id}`;
    return this.http.put(url, usersBird, this.httpOptions).pipe(
      //tap(_ => this.log(`updated bird id=${bird.id}`)),
      catchError(this.handleError<any>('updateUsersBird'))
    );
  }


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
