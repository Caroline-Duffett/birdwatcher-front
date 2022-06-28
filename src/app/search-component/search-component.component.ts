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



import { Component, OnInit } from '@angular/core';
import {Bird} from '../bird'; //Calls in the bird model/schema we made
import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {

  birds!: Observable<Bird[]>; //sets birds property

  private searchTerms = new Subject<string>();



  constructor(
    private birdService: BirdService, //defines and injects the bird service we made
  ) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.birds = this.searchTerms.pipe(
     debounceTime(350), // wait 350ms after each keystroke before considering the term
     distinctUntilChanged(),  // ignore new term if same as previous term
     switchMap((term: string) => this.birdService.searchBirds(term)), // switch to new search observable each time the term changes
   );
  }




}





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
