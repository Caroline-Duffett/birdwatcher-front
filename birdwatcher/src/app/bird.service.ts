import { Injectable } from '@angular/core'; //generated when made, allows us to inject/import to other components?
import {Bird} from './bird';  //calls in the bird model/schema we made
import { HttpClient, HttpHeaders } from '@angular/common/http'; //connects to our database. Angular built in version of axios?
import { Observable, of } from 'rxjs'; //researh this more
import { catchError, map, tap } from 'rxjs/operators'; //module that lets us error handle


@Injectable({
  providedIn: 'root'
})

export class BirdService {

  private birdsUrl = 'http://localhost:3000/birds' //our database? URL to web API

  //tells it that we are an app and to read/send json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  // GET brids (index) from the server
  getBirds(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.birdsUrl)
      .pipe(
        //tap(_ => this.log('fetched birds')),
        catchError(this.handleError<Bird[]>('getBirds', []))
      );
  }

  // GET bird (show) by id. Will 404 if id not found
  getBird(id: number): Observable<Bird> {
    const url = `${this.birdsUrl}/${id}`;
    return this.http.get<Bird>(url).pipe(
      tap(_ => this.log(`fetched bird id=${id}`)),
      catchError(this.handleError<Bird>(`getBird id=${id}`))
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
