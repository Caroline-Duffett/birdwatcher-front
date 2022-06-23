import { Component, OnInit } from '@angular/core'; //makes this a component in angular
import {Bird} from '../bird'; //calls in the bird model/schema we made
import {BirdService} from '../bird.service'; //imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?

// links the premade files that goes with this component
@Component({
  selector: 'app-birds-index',
  templateUrl: './birds-index.component.html',
  styleUrls: ['./birds-index.component.css']
})

// The component
export class BirdsIndexComponent implements OnInit {

  birds: Bird[] = [] //sets birds property

  constructor(private birdService: BirdService) {} //defines and injects the bird service we made

  //calls in the birds after component is constructured. Lifecycle hook
  ngOnInit(): void {
    this.getBirds();
  }

  //gets the birds from the bird service (where the birds are being called in from database)
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }

}
