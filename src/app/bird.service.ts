import { Injectable } from '@angular/core'; //generated when made, allows us to inject/import to other components?
import { Bird } from './bird';  //calls in the bird model/schema we made
import { HttpClient, HttpHeaders } from '@angular/common/http'; //connects to our database. Angular built in version of axios?
import { Observable, of } from 'rxjs'; //researh this more
import { catchError, map } from 'rxjs/operators'; //module that lets us error handle


@Injectable({
  providedIn: 'root'
})


export class BirdService {

  //private birdsUrl = 'http://localhost:3000/birds' //Local database
  private birdsUrl = 'https://bird-watcher-back.herokuapp.com/birds' //Heroku database


  //tells it that we are an app and to read/send json
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(
    private http: HttpClient,
  ) { }


  //-- GET brids (index) from the server
  getBirds(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.birdsUrl)
      .pipe(
        catchError(this.handleError<Bird[]>('getBirds', []))
      );
  }


  //-- GET bird (show) by id error handling
  getBirdNo404<Data>(_id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/?id=${_id}`;
    return this.http.get<Bird[]>(url)
      .pipe(
        map(birds => birds[0]), // returns a {0|1} element array
        catchError(this.handleError<Bird>(`getBird id=${_id}`))
      );
  }


  //-- GET bird (show) by id
  getBird(_id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/${_id}`;
    return this.http.get<Bird>(url).pipe(
      catchError(this.handleError<Bird>(`getBird id=${_id}`))
    );
  }


  //-- POST add a new bird to the server, (no errors)
  addBird(bird: Bird): Observable<Bird> {
    return this.http.post<Bird>(this.birdsUrl, bird, this.httpOptions).pipe(
      catchError(this.handleError<Bird>('addBird'))
    );
  }


  //-- DELETE the bird from the server
  deleteBird(_id: string): Observable<Bird> {
    const url = `${this.birdsUrl}/${_id}`;
    return this.http.delete<Bird>(url, this.httpOptions).pipe(
      catchError(this.handleError<Bird>('deleteBird'))
    );
  }


  //-- PUT update the bird on the server
  updateBird(bird: Bird): Observable<any> {
    const id = bird._id;
    const url = `${this.birdsUrl}/${id}`;
    return this.http.put(url, bird, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateBird'))
    );
  }


  //--- Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

}
