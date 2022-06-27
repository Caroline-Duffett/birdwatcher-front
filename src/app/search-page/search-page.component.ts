// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-search-page',
//   templateUrl: './search-page.component.html',
//   styleUrls: ['./search-page.component.css']
// })
// export class SearchPageComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }




// import { Component, OnInit } from '@angular/core';
// import { Observable, Subject } from 'rxjs';
// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
// import { Bird } from '../bird';
// import { BirdService } from '../bird.service';
//
// @Component({
//   selector: 'app-search-page',
//   templateUrl: './search-page.component.html',
//   styleUrls: ['./search-page.component.css']
// })
// export class SearchPageComponent implements OnInit {
//
//   birds$!: Observable<Bird[]>; // calls birds into the component in observable form
//   private searchTerms = new Subject<string>(); //declares searchTerms
//
//   constructor(
//     private birdService: BirdService
//   ) { }
//
//
//   search(term: string): void {
//     this.searchTerms.next(term);
//   }
//
//
//   ngOnInit(): void {
//     this.birds$ = this.searchTerms.pipe (
//       debounceTime(350), //waits 350ms before searching adter you type
//
//       distinctUntilChanged(), //makes sure term is not repeated
//
//       switchMap((term: string) => this.birdService.searchBirds(term)), //updates the observable as term is typed
//     );
//   }
//
// }


// import { Component, OnInit } from '@angular/core';
// import { Bird } from '../bird';
// import { BirdService } from '../bird.service';
// import { ActivatedRoute } from '@angular/router';
//
// @Component({
//   selector: 'app-search-page',
//   templateUrl: './search-page.component.html',
//   styleUrls: ['./search-page.component.css']
// })
//
// export class SearchPageComponent implements OnInit {
//
//   birds: Bird[] = [] //sets birds property
//
//   constructor(
//     private birdService: BirdService, //defines and injects the bird service we made
//     private route: ActivatedRoute
//   ) { }
//
//
//   ngOnInit(): void {
//     this.getBirds();
//
//     this.route.params.subscribe(params => {
//       if (params.searchTerm) {
//         this.birds = this.birdService.getAll().filter(bird => bird.name.toLowerCase().includes(params.searchTerm.toLowerCase()));
//       } else {
//         this.birds = this.birdService.getAll();
//       }
//     })
//   }
//
//
//   //Gets the birds from the bird service (where the birds are being called in from database)
//   getBirds(): void {
//     this.birdService.getBirds()
//     .subscribe(birds => this.birds = birds);
//   }
//
// }



import { Component, OnInit } from '@angular/core';
import { Bird } from '../bird';
import { BirdService } from '../bird.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})

export class SearchPageComponent implements OnInit {

  birds: Bird[] = [] //sets birds property

  constructor(
    private birdService: BirdService, //defines and injects the bird service we made
    private route: ActivatedRoute
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
