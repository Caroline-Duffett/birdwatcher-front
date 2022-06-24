import { Component, OnInit} from '@angular/core'; //Makes this a component in angular
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
  bird: Bird | undefined;

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
     const id = parseInt(this.route.snapshot.paramMap.get('id')!);
     this.birdService.getBird(id)
       .subscribe(bird => this.bird = bird);
  }

  // //Gets the bird you clicked on, doing so by id
  // getBird(): void {
  //    const id = this.route.snapshot.paramMap.get('id')!;
  //    this.birdService.getBird(id)
  //      .subscribe(bird => this.bird = bird);
  // }

  //Back button
  backBtn(): void {
    this.location.back()
  }

  //Submits edits
  editSubmit(): void {
    if (this.bird) {
      this.birdService.updateBird(this.bird)
      .subscribe(() => this);
    }
  }

  //Deletes the bird and redirects you back to the index page
  delete(bird: Bird): void {
    this.birdService.deleteBird(bird.madeId).subscribe();
    this.location.back()
  }
  //
  // //Deletes the bird and redirects you back to the index page
  // delete(bird: Bird): void {
  //   this.birdService.deleteBird(bird._id).subscribe();
  //   this.location.back()
  // }
}







//====================================================================================================================//
//                                                      Grave Yard
//====================================================================================================================//
//-------------------------------------------------------------------------------------------- If id were a number ---//
  // //Gets the bird you clicked on, doing so by id
  // getBird(): void {
  //    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
  //    this.birdService.getBird(id)
  //      .subscribe(bird => this.bird = bird);
  // }
//--------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------------------------- If id were a string ---//
  // //Gets the bird you clicked on, doing so by id
  // getBird(): void {
  //    const id = this.route.snapshot.paramMap.get('id')!;
  //    this.birdService.getBird(id)
  //      .subscribe(bird => this.bird = bird);
  // }
//--------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------- Delete if I ever need to filter ---//
  // delete(bird: Bird): void {
  //   // this.birds = this.birds.filter(b => b !== bird);
  //   this.birdService.deleteBird(bird._id).subscribe();
  //   this.location.back()
  // }
//--------------------------------------------------------------------------------------------------------------------//
