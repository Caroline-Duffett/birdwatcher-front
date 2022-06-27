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


//--- 1
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
//--- 1





//--- 2
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
//--- 2


//--- 3
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
//--- 3
