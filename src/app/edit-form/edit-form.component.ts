import { Component, OnInit } from '@angular/core';
import { Bird } from '../bird'; //Calls in the bird model/schema we made
import { ActivatedRoute } from '@angular/router'; //Shows current snapshot of the route?
//import { Location } from '@angular/common'; //Interacts with the browser URL
import { BirdService } from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  bird: Bird | undefined;

  constructor(
    private route: ActivatedRoute,
    private birdService: BirdService,
    //private location: Location
  ) { }

  ngOnInit(): void {
    this.getBird();
  }

  //Gets the bird you clicked on, doing so by id
  getBird(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.birdService.getBird(id)
      .subscribe(bird => this.bird = bird);
    console.log("The bird is edit: " + this.bird);
  }

  // //Back button
  // backBtn(): void {
  //   this.location.back()
  // }

  editSubmit(): void {
    if (this.bird) {
      this.birdService.updateBird(this.bird)
      .subscribe(() => this);
    }
  }

  whichBird(): void {
    // console.log('clicked');
    // console.log("this id is: " + this.route.snapshot.paramMap.get('id')!);
    // const id = this.route.snapshot.paramMap.get('id')!;
    // console.log(this.birdService.getBird(id));



    const id = this.route.snapshot.paramMap.get('id')!;
    //console.log("this id is: " + this.route.snapshot.paramMap.get('id')!);
    this.birdService.getBird(id).subscribe(bird => this.bird = bird);
    //console.log(this.birdService.getBird(id));

    console.log("The bird is " + this.bird);
    console.log(this.bird);

  }

}
