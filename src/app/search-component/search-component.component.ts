import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Bird} from '../bird'; //Calls in the bird model/schema we made
import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {

  birds: Bird[] = []//index way
  searchTextName: string = ''
  searchTextRegion: string = ''

  constructor(
    private birdService: BirdService //defines and injects the bird service we made
  ) { }


  ngOnInit(): void {
    this.getBirds();
  }


  //Gets the birds from the bird service (where the birds are being called in from database)
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }
}



// import { Component, OnInit } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import {Bird} from '../bird'; //Calls in the bird model/schema we made
// import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?
//
//
// @Component({
//   selector: 'app-search-component',
//   templateUrl: './search-component.component.html',
//   styleUrls: ['./search-component.component.css']
// })
//
// export class SearchComponentComponent implements OnInit {
//
//   birds: Bird[] = []//index way
//   searchText: string = ''
//
//   constructor(
//     private birdService: BirdService //defines and injects the bird service we made
//   ) { }
//
//
//   ngOnInit(): void {
//     this.getBirds();
//   }
//
//   //Gets the birds from the bird service (where the birds are being called in from database)
//   getBirds(): void {
//     this.birdService.getBirds()
//     .subscribe(birds => this.birds = birds);
//   }
//
// }









//====================================================================================================================//
//                                                      Grave Yard
//====================================================================================================================//
//----------------------------------------------------------------------------------------------- Search Attempt 1 ---//
  // import { Component, OnInit, EventEmitter, Output } from '@angular/core';
  //
  // @Component({
  //   selector: 'app-search-page',
  //   templateUrl: './search-page.component.html',
  //   styleUrls: ['./search-page.component.css']
  // })
  //
  // export class SearchPageComponent implements OnInit {
  //
  //   constructor() { }
  //
  //
  //   ngOnInit(): void {
  //
  //   }
  //
  //   searchTerm: string = '';
  //
  //   @Output()
  //   searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  //
  //   onSearchTermChanged() {
  //     this.searchTermChange.emit(this.searchTerm);
  //   }
  //
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//


//----------------------------------------------------------------------------------------------- Search Attempt 2 ---//
  // import { Component, OnInit, EventEmitter, Output } from '@angular/core';
  //
  // @Component({
  //   selector: 'app-search-component',
  //   templateUrl: './search-component.component.html',
  //   styleUrls: ['./search-component.component.css']
  // })
  // export class SearchComponentComponent implements OnInit {
  //
  //   constructor() { }
  //
  //   ngOnInit(): void {
  //
  //   }
  //
  //   searchTerm: string = '';
  //
  //   @Output()
  //   searchTermChange: EventEmitter<string> = new EventEmitter<string>();
  //
  //   onSearchTermChanged() {
  //     this.searchTermChange.emit(this.searchTerm);
  //     console.log(this.searchTerm);
  //   }
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------- Search Attempt 3 (Backend)---//
  // import { Component, OnInit } from '@angular/core';
  // import { BirdService} from '../bird.service';
  // //import { BirdService, Bird } from '../bird.service';
  // import {Bird} from '../bird'; //Calls in the bird model/schema we made
  //
  // @Component({
  //   selector: 'app-search-component',
  //   templateUrl: './search-component.component.html',
  //   styleUrls: ['./search-component.component.css']
  // })
  // export class SearchComponentComponent implements OnInit {
  //
  //   birds: Array<Bird> = [];
  //
  //   constructor(
  //     private birdService: BirdService
  //   ) { }
  //
  //   ngOnInit(): void {
  //   }
  //
  //   sendData(event: any) {
  //     console.log(event.target.value);
  //     let query:string = event.target.value;
  //
  //     let matchSpaces:any = query.match(/\s*/);
  //     if (matchSpaces[0] === query) {
  //       this.birds = [];
  //       return;
  //     }
  //
  //     this.birdService.searchBirds(query.trim()).subscribe(results => {
  //       this.birds = results;
  //       console.log(results);
  //     })
  //   }
  //
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//


//--------------------------------------------------------------------------------- Tour of Heroes Tutorial Search ---//
  // import { Component, OnInit } from '@angular/core';
  // import { Observable, Subject } from 'rxjs';
  // import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
  // import {Bird} from '../bird'; //Calls in the bird model/schema we made
  // import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?
  //
  //
  // @Component({
  //   selector: 'app-search-component',
  //   templateUrl: './search-component.component.html',
  //   styleUrls: ['./search-component.component.css']
  // })
  //
  // export class SearchComponentComponent implements OnInit {
  //
  //   birds$!: Observable<Bird[]>; //Lets page load but does not filter right
  //   //birds$!: Observable<Bird>; //sets birds property (does not work)
  //
  //   private searchTerms = new Subject<string>(); //OG
  //   //private searchTerms = new Subject<string>(1); //Did not work
  //   //private searchTerms = new ReplaySubject<string>(1); //Did not work
  //
  //
  //   constructor(
  //     private birdService: BirdService //defines and injects the bird service we made
  //   ) { }
  //
  //   // Push a search term into the observable stream.
  //   search(term: string): void {
  //     this.searchTerms.next(term);
  //     //console.log(this.searchTerms.next(term)) //undefined
  //     //console.log(this.searchTerms.Subject) //can't access
  //     //console.log(term) //Logs what is in the textbox
  //     //console.log(this.searchTerms.observers.length); // logs length, always 1
  //     //console.log(this.searchTerms.observers[0].next); //not helpufl
  //   }
  //
  //
  //
  //   ngOnInit(): void {
  //     // console.log(this.birds$); //undefined
  //     this.birds$ = this.searchTerms.pipe(
  //       debounceTime(450), // wait 250ms after each keystroke before considering the term
  //       distinctUntilChanged(),  // ignore new term if same as previous term
  //       switchMap((term: string) => this.birdService.searchBirds(term)), // switch to new search observable each time the term changes
  //    );
  //   }
  // }
//--------------------------------------------------------------------------------------------------------------------//

//------------------------------------------------------------------------------------------------ OG Working Code ---//
  // //tutorial: https://www.youtube.com/watch?v=vZ91vDD7FGY
  // //package: https://www.npmjs.com/package/ng2-search-filter
  // import { Component, OnInit } from '@angular/core';
  // import { Observable, Subject } from 'rxjs';
  // //import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
  // import {Bird} from '../bird'; //Calls in the bird model/schema we made
  // import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?
  // //import { FormsModule } from '@angular/forms';
  //
  //
  // @Component({
  //   selector: 'app-search-component',
  //   templateUrl: './search-component.component.html',
  //   styleUrls: ['./search-component.component.css']
  // })
  //
  // export class SearchComponentComponent implements OnInit {
  //
  //   birds: Bird[] = []//index way
  //
  //   //birds!: Observable<Bird[]>; //Lets page load but does not filter right
  //   //birds$!: Observable<Bird>; //sets birds property (does not work)
  //
  //   searchText: string = ''
  //
  //   //private searchTerms = new Subject<string>(); //OG
  //   //private searchTerms = new Subject<string>(1); //Did not work
  //   //private searchTerms = new ReplaySubject<string>(1); //Did not work
  //
  //
  //   constructor(
  //     private birdService: BirdService //defines and injects the bird service we made
  //   ) { }
  //
  //   // // Push a search term into the observable stream.
  //   // search(term: string): void {
  //   //   let terms = this.searchTerms.next(term);
  //   // }
  //
  //
  //   ngOnInit(): void {
  //     this.getBirds();
  //    //  this.birds$ = this.searchTerms.pipe(
  //    //    debounceTime(450), // wait 250ms after each keystroke before considering the term
  //    //    distinctUntilChanged(),  // ignore new term if same as previous term
  //    //    switchMap((term: string) => this.birdService.searchBirds(term)), // switch to new search observable each time the term changes
  //    // );
  //    //this.searchText
  //   }
  //
  //
  //   debugging() {
  //     //console.log('button works');
  //     console.log(this.searchText); //can register search text
  //   }
  //
  //   //Gets the birds from the bird service (where the birds are being called in from database)
  //   getBirds(): void {
  //     this.birdService.getBirds()
  //     .subscribe(birds => this.birds = birds);
  //   }
  //
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//



//---------------------------------------------------------------------------------- If need to start from scratch ---//
  // import { Component, OnInit } from '@angular/core';
  //
  // @Component({
  //   selector: 'app-search-component',
  //   templateUrl: './search-component.component.html',
  //   styleUrls: ['./search-component.component.css']
  // })
  // export class SearchComponentComponent implements OnInit {
  //
  //   constructor() { }
  //
  //   ngOnInit(): void {
  //   }
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//
