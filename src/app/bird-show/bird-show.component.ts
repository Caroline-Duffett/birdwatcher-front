import { Component, OnInit } from '@angular/core'; //Makes this a component in angular
import { Bird } from '../bird'; //Calls in the bird model/schema we made
import { ActivatedRoute } from '@angular/router'; //Shows current snapshot of the route?
import { Location } from '@angular/common'; //Interacts with the browser URL
import { BirdService } from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?


//Links the premade files that goes with this component
@Component({
  selector: 'app-bird-show',
  templateUrl: './bird-show.component.html',
  styleUrls: ['./bird-show.component.css']
})


//The component
export class BirdShowComponent implements OnInit {


  //Defines bird property and error handling if undefined
  bird: Bird | undefined; //sets bird property
  birds: Bird[] = [] //sets birds property (need this here to get the birds again after delete)

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
    const id = this.route.snapshot.paramMap.get('id')!;
    this.birdService.getBird(id)
      .subscribe(bird => this.bird = bird);
  }

  //Back button
  backBtn(): void {
    this.location.back()
  }

  //Submits edits
  editSubmit(): void {
    console.log('edit show');

    if (this.bird) {
      this.birdService.updateBird(this.bird)
      .subscribe(() => this);
    }

  }

  //If modal gets closed/cancelled resets text
  close(): void {
    this.getBird()
  }

  //Gets the birds from the bird service (where the birds are being called in from database). Need to here to grab the data again after it was deleted. This function gets called in the delete function.
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }

  //Deletes the bird and redirects you back to the index page
  delete(bird: Bird): void {
    this.birdService.deleteBird(bird._id).subscribe();
    this.location.back()
    this.getBirds()
  }
}
