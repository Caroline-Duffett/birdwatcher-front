import { Component, OnInit } from '@angular/core'; //Makes this a component in angular
import {Bird} from '../bird'; //Calls in the bird model/schema we made
import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?
import { Location } from '@angular/common'; //Interacts with the browser URL

//Links the premade files that goes with this component
@Component({
  selector: 'app-birds-index',
  templateUrl: './birds-index.component.html',
  styleUrls: ['./birds-index.component.css']
})

//The component
export class BirdsIndexComponent implements OnInit {

  birds: Bird[] = [] //sets birds property

  constructor(
    private birdService: BirdService, //defines and injects the bird service we made
    private location: Location
  ) {}

  //Calls in the birds after component is constructured. Lifecycle hook
  ngOnInit(): void {
    this.getBirds();
  }

  //Gets the birds from the bird service (where the birds are being called in from database)
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
    //this.location.reload()
    //  window.location.reload() //Infinite loop of refreshes
  }

}
