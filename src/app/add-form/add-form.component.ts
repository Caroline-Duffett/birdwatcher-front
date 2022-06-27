import { Component, OnInit } from '@angular/core';
import {Bird} from '../bird';
import {BirdService} from '../bird.service';
import {Location} from '@angular/common'; //Interacts with the browser URL
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  birds: Bird[] = [] //sets birds property (need this here to get the birds again after this has been added)

  constructor(
    private birdService: BirdService,
    private locationAngular: Location,
    private formsModule: FormsModule
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
  }

  //Back button
  backBtn(): void {
    this.locationAngular.back() //really just location (had to rename because I made an input field called location)
  }


  acceptedName = true;
  acceptedScientificName = true;
  acceptedImage = true;
  acceptedLocation = true;
  acceptedStatus = true;
  acceptedDescription = true;


  submit(add: any): void {
    const newBird = {
      name: add.form.value.name,
      scientificName: add.form.value.scientificName,
      image: add.form.value.image,
      location: add.form.value.location,
      status: add.form.value.status,
      description: add.form.value.description
    }

    //error message toggling (only thing I could get to work) If passes bird will be added
    if (add.form.controls.name.status === "INVALID") {
      this.acceptedName = false;
    } else {
      this.acceptedName = true;
    }

    if (add.form.controls.scientificName.status === "INVALID") {
      this.acceptedScientificName = false;
    } else {
      this.acceptedScientificName = true;
    }

    if (add.form.controls.image.status === "INVALID") {
      this.acceptedImage = false;
    } else {
      this.acceptedImage = true;
    }

    if (add.form.controls.location.status === "INVALID") {
      this.acceptedLocation = false;
    } else {
      this.acceptedLocation = true;
    }

    if (add.form.controls.status.status === "INVALID") {
      this.acceptedStatus = false;
    } else {
      this.acceptedStatus = true;
    }

    if (add.form.controls.description.status === "INVALID") {
      this.acceptedDescription = false;
    } else {
      this.acceptedDescription = true;
    }

    if (add.form.controls.description.status !== "INVALID" && add.form.controls.status.status !== "INVALID" && add.form.controls.location.status !== "INVALID" && add.form.controls.image.status !== "INVALID" && add.form.controls.scientificName.status !== "INVALID" && add.form.controls.name.status !== "INVALID") {
      this.birdService.addBird(newBird as Bird).subscribe(() => {
        this
      })
      this.locationAngular.back()
      this.getBirds()
    }
  }

}











//====================================================================================================================//
//                                                      Grave Yard
//====================================================================================================================//
//-------------------------------------------------------------------------------- First attempt at error logging ---//
  // if (HttpErrorResponse.error.lengthComputable === false) {
  //   console.log("field is required");
  // }


  // submit(addForm: any): void {
  //   // const newBird = {
  //   //   name: name,
  //   //   scientificName: scientificName,
  //   //   image: image,
  //   //   location: location,
  //   //   status: status,
  //   //   description: description
  //   // }
  //
  //   console.log("form submitted", addForm);
  //
  //
  //   this.birdService.addBird(addForm as Bird).subscribe(() => {
  //     this
  //   })
  //
  //   // if (HttpErrorResponse.error.lengthComputable === false) {
  //   //   console.log("field is required");
  //   // }
  //
  //   //console.log(add);
  //
  //
  //   //this.locationAngular.back()
  //
  //   //this.getBirds()
  // }
//--------------------------------------------------------------------------------------------------------------------//


//-------------------------------------------------------------------------- Original Before Error handling added ---//
  // import { Component, OnInit } from '@angular/core';
  // import {Bird} from '../bird';
  // import {BirdService} from '../bird.service';
  // import {Location} from '@angular/common'; //Interacts with the browser URL
  // //import {FormsModule} from '@angular/forms';
  //
  // @Component({
  //   selector: 'app-add-form',
  //   templateUrl: './add-form.component.html',
  //   styleUrls: ['./add-form.component.css']
  // })
  //
  // export class AddFormComponent implements OnInit {
  //
  //   birds: Bird[] = [] //sets birds property (need this here to get the birds again after this has been added)
  //
  //   constructor(
  //     private birdService: BirdService,
  //     private locationAngular: Location
  //   ) { }
  //
  //   ngOnInit(): void {
  //
  //   }
  //
  //   name: string = ''
  //   scientificName: string = ''
  //   image: string = ''
  //   location: string = ''
  //   status: string = ''
  //   description: string = ''
  //
  //
  //   //Gets the birds from the bird service (where the birds are being called in from database). Need to here to grab the data again after it was added. This function gets called in the submit function.
  //   getBirds(): void {
  //     this.birdService.getBirds()
  //     .subscribe(birds => this.birds = birds);
  //   }
  //
  //   //Back button
  //   backBtn(): void {
  //     this.locationAngular.back() //really just location (had to rename because I made an input field called location)
  //   }
  //
  //   submit(name: string, scientificName: string, image: string, location: string, status: string, description: string): void {
  //     const newBird = {
  //       name: name,
  //       scientificName: scientificName,
  //       image: image,
  //       location: location,
  //       status: status,
  //       description: description
  //     }
  //
  //     this.birdService.addBird(newBird as Bird).subscribe(() => {
  //       this
  //     })
  //
  //
  //
  //     console.log(newBird);
  //
  //
  //     this.locationAngular.back()
  //
  //     this.getBirds()
  //   }
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//


//----------------------------------------------------------------------------- Error Handling One Field at a Time ---//
  // import { Component, OnInit } from '@angular/core';
  // import {Bird} from '../bird';
  // import {BirdService} from '../bird.service';
  // import {Location} from '@angular/common'; //Interacts with the browser URL
  // import {FormsModule} from '@angular/forms';
  //
  // @Component({
  //   selector: 'app-add-form',
  //   templateUrl: './add-form.component.html',
  //   styleUrls: ['./add-form.component.css']
  // })
  //
  // export class AddFormComponent implements OnInit {
  //
  //   birds: Bird[] = [] //sets birds property (need this here to get the birds again after this has been added)
  //
  //   constructor(
  //     private birdService: BirdService,
  //     private locationAngular: Location,
  //     private formsModule: FormsModule
  //   ) { }
  //
  //   ngOnInit(): void {
  //
  //   }
  //
  //   name: string = ''
  //   scientificName: string = ''
  //   image: string = ''
  //   location: string = ''
  //   status: string = ''
  //   description: string = ''
  //
  //
  //   //Gets the birds from the bird service (where the birds are being called in from database). Need to here to grab the data again after it was added. This function gets called in the submit function.
  //   getBirds(): void {
  //     this.birdService.getBirds()
  //     .subscribe(birds => this.birds = birds);
  //   }
  //
  //   //Back button
  //   backBtn(): void {
  //     this.locationAngular.back() //really just location (had to rename because I made an input field called location)
  //   }
  //
  //
  //   acceptedName = true;
  //   acceptedScientificName = true;
  //   acceptedImage = true;
  //   acceptedLocation = true;
  //   acceptedStatus = true;
  //   acceptedDescription = true;
  //
  //
  //   submit(add: any): void {
  //     const newBird = {
  //       name: add.form.value.name,
  //       scientificName: add.form.value.scientificName,
  //       image: add.form.value.image,
  //       location: add.form.value.location,
  //       status: add.form.value.status,
  //       description: add.form.value.description
  //     }
  //
  //     //error message toggling (only thing I could get to work) If passes bird will be added
  //     if (add.form.controls.name.status === "INVALID") {
  //       this.acceptedName = false;
  //       this.acceptedScientificName = true;
  //       this.acceptedImage = true;
  //       this.acceptedLocation = true;
  //       this.acceptedStatus = true;
  //       this.acceptedDescription = true;
  //     } else if (add.form.controls.scientificName.status === "INVALID") {
  //       this.acceptedName = true;
  //       this.acceptedScientificName = false;
  //       this.acceptedImage = true;
  //       this.acceptedLocation = true;
  //       this.acceptedStatus = true;
  //       this.acceptedDescription = true;
  //     } else if (add.form.controls.image.status === "INVALID") {
  //       this.acceptedName = true;
  //       this.acceptedScientificName = true;
  //       this.acceptedImage = false;
  //       this.acceptedLocation = true;
  //       this.acceptedStatus = true;
  //       this.acceptedDescription = true;
  //     } else if (add.form.controls.location.status === "INVALID") {
  //       this.acceptedName = true;
  //       this.acceptedScientificName = true;
  //       this.acceptedImage = true;
  //       this.acceptedLocation = false;
  //       this.acceptedStatus = true;
  //       this.acceptedDescription = true;
  //     } else if (add.form.controls.status.status === "INVALID") {
  //       this.acceptedName = true;
  //       this.acceptedScientificName = true;
  //       this.acceptedImage = true;
  //       this.acceptedLocation = true;
  //       this.acceptedStatus = false;
  //       this.acceptedDescription = true;
  //     } else if (add.form.controls.description.status === "INVALID") {
  //       this.acceptedName = true;
  //       this.acceptedScientificName = true;
  //       this.acceptedImage = true;
  //       this.acceptedLocation = true;
  //       this.acceptedStatus = true;
  //       this.acceptedDescription = false;
  //     } else {
  //       this.acceptedName = true;
  //       this.acceptedScientificName = true;
  //       this.acceptedImage = true;
  //       this.acceptedLocation = true;
  //       this.acceptedStatus = true;
  //       this.acceptedDescription = true;
  //
  //       this.birdService.addBird(newBird as Bird).subscribe(() => {
  //         this
  //       })
  //       this.locationAngular.back()
  //       this.getBirds()
  //     }
  //   }
  //
  // }
//--------------------------------------------------------------------------------------------------------------------//
