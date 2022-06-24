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

  /// GET bird (show) by id. Will return `undefined` if id is not found. How the 404 error gets displayed
  getBirdNo404<Data>(id: number): Observable<Bird> {
    const url = `${this.birdsUrl}/?id=${id}`;
    return this.http.get<Bird[]>(url)
      .pipe(
        map(birds => birds[0]), // returns a {0|1} element array
        // tap(h => {
        //   const outcome = h ? 'fetched' : 'did not find';
        //   this.log(`${outcome} bird id=${id}`);
        // }),
        catchError(this.handleError<Bird>(`getBird id=${id}`))
      );
  }

  // GET bird (show) by id. Will 404 if id not found
  getBird(id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/${id}`;
    return this.http.get<Bird>(url).pipe(
      //tap(_ => this.log(`fetched bird id=${id}`)),
      catchError(this.handleError<Bird>(`getBird id=${id}`))
    );
  }

  // //POST add a new bird to the server */
  // addBird(bird: Bird): Observable<Bird> {
  //   return this.http.post<bird>(this.birdsUrl, bird, this.httpOptions).pipe(
  //     //tap((newBird: Bird) => this.log(`added bird with id=${newBird._id}`)),
  //     catchError(this.handleError<Bird>('addBird'))
  //   );
  // }

  // //POST add a new bird to the server, (no errors but does not work)
  // addBird(bird: Bird): Observable<Bird> {
  //   return this.http.post<typeof bird>(this.birdsUrl, bird, this.httpOptions).pipe(
  //     //tap((newBird: Bird) => this.log(`added bird with id=${newBird._id}`)),
  //     catchError(this.handleError<Bird>('addBird'))
  //   );
  // }

  //POST add a new bird to the server, (no errors)
  addBird(bird: Bird): Observable<Bird> {
    return this.http.post<Bird>(this.birdsUrl, bird, this.httpOptions).pipe(
      //tap((newBird: Bird) => this.log(`added bird with id=${newBird._id}`)),
      catchError(this.handleError<Bird>('addBird'))
    );
  }


  // //POST add a new bird to the server */
  // addBird(bird: Bird): Observable<Bird> {
  //   return this.http.post(this.birdsUrl, bird, this.httpOptions).pipe(
  //     //tap((newBird: Bird) => this.log(`added bird with id=${newBird._id}`)),
  //     catchError(this.handleError<Bird>('addBird'))
  //   );
  // }


  // //DELETE the bird from the server
  deleteBird(id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/${id}`;
    return this.http.delete<Bird>(url, this.httpOptions).pipe(
      //tap(_ => this.log(`deleted bird id=${id}`)),
      catchError(this.handleError<Bird>('deleteBird'))
    );
  }


  // // GET bird (show) by id. Will 404 if id not found
  // getBird(id: string): Observable<Bird> {
  //   const url = `${this.birdsUrl}/${id}`;
  //   return this.http.get<Bird>(url).pipe(
  //     //tap(_ => this.log(`fetched bird id=${id}`)),
  //     catchError(this.handleError<Bird>(`getBird id=${id}`))
  //   );
  // }



  //PUT update the bird on the server
  updateBird(bird: Bird): Observable<any> {
    const id = bird._id;
    const url = `${this.birdsUrl}/${id}`;
    return this.http.put(url, bird, this.httpOptions).pipe(
      //tap(_ => this.log(`updated bird id=${bird.id}`)),
      catchError(this.handleError<any>('updateBird'))
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


//====================================================================================================================//
//                                                      Grave Yard
//====================================================================================================================//
//-------------------------------------------------------------------------------------------- If id were a number ---//
  // // GET bird (show) by id. Will 404 if id not found
  // getBird(id: number): Observable<Bird> {
  //   const url = `${this.birdsUrl}/${id}`;
  //   return this.http.get<Bird>(url).pipe(
  //     //tap(_ => this.log(`fetched bird id=${id}`)),
  //     catchError(this.handleError<Bird>(`getBird id=${id}`))
  //   );
  // }
//--------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------ Original PUT Route (did not work) ---//
  // //PUT update the bird on the server
  // updateBird(bird: Bird): Observable<any> {
  //   return this.http.put(this.birdsUrl, bird, this.httpOptions).pipe(
  //     //tap(_ => this.log(`updated bird id=${bird.id}`)),
  //     catchError(this.handleError<any>('updateBird'))
  //   );
  // }
//--------------------------------------------------------------------------------------------------------------------//
