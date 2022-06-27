import { Component, OnInit } from '@angular/core';
import {Bird} from '../bird';
import {BirdService} from '../bird.service';
// import { ActivatedRoute, Router } from '@angular/router'; //Shows current snapshot of the route?
 import { Location } from '@angular/common'; //Interacts with the browser URL

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  birds: Bird[] = [] //sets birds property (need this here to get the birds again after this has been added)

  constructor(
    private birdService: BirdService,
    //private route: ActivatedRoute,
    private locationAngular: Location
    //private router: Router,
  ) { }

  ngOnInit(): void {

  }

  name: string = ''
  scientificName: string = ''
  image: string = ''
  location: string = ''
  status: string = ''
  description: string = ''


  //Gets the birds from the bird service (where the birds are being called in from database). Need to here to grab the data again after it was added. This function gets called in the submit function.
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
    //this.location.reload()
    //  window.location.reload() //Infinite loop of refreshes
  }


  submit(name: string, scientificName: string, image: string, location: string, status: string, description: string): void {
    const newBird = {
      name: name,
      scientificName: scientificName,
      image: image,
      location: location,
      status: status,
      description: description
    }

    this.birdService.addBird(newBird as Bird).subscribe(() => {
      this
    })

    this.locationAngular.back()
    // this.router.navigate(['/birds']);

    this.getBirds()
  }

}






//====================================================================================================================//
//                                                      Grave Yard
//====================================================================================================================//
