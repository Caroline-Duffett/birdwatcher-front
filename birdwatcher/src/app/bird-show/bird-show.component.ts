// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-bird-show',
//   templateUrl: './bird-show.component.html',
//   styleUrls: ['./bird-show.component.css']
// })
// export class BirdShowComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }


import { Component, OnInit} from '@angular/core'; //makes this a component in angular
import { Bird } from '../bird'; //calls in the bird model/schema we made
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BirdService } from '../bird.service'; //imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?

// links the premade files that goes with this component
@Component({
  selector: 'app-bird-show',
  templateUrl: './bird-show.component.html',
  styleUrls: ['./bird-show.component.css']
})

//The component
export class BirdShowComponent implements OnInit {

  //defines bird property and error handling if undefined
  bird: Bird;
  //bird: Bird | undefined;

  constructor(
    private route: ActivatedRoute,
    private birdService: BirdService,
    private location: Location
  ) {}


  //Wait until component is constructed before pulling in the bird
  ngOnInit(): void {
    this.getBird();
  }

  //Gets the bird you clicked on, doing so by id
  getBird(): void {
     //const id = parseInt(this.route.snapshot.paramMap.get('id')!);
     const id = this.route.snapshot.paramMap.get('bird._id');
     this.birdService.getBird(id)
       .subscribe(bird => this.bird = bird);
  }

}
