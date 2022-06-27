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
//   submit(add: any): void {
//     // const newBird = {
//     //   name: name,
//     //   scientificName: scientificName,
//     //   image: image,
//     //   location: location,
//     //   status: status,
//     //   description: description
//     // }
//
//     this.birdService.addBird(add as Bird).subscribe(() => {
//       this
//     })
//
//
//
//     console.log(add);
//
//
//     //this.locationAngular.back()
//
//     this.getBirds()
//   }
//
// }











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
//     // if (ng-valid.required === ng-valid[required]) {
//     //   console.log("form is valid");
//     //
//     // }
//
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

  // submit(name: string, scientificName: string, image: string, location: string, status: string, description: string): void {
  //   const newBird = {
  //     name: name,
  //     scientificName: scientificName,
  //     image: image,
  //     location: location,
  //     status: status,
  //     description: description
  //   }
  //
  //   this.birdService.addBird(newBird as Bird).subscribe(() => {
  //     this
  //   })
  //
  //
  //
  //   console.log(newBird);
  //
  //
  //   //this.locationAngular.back()
  //
  //   this.getBirds()
  // }


  submit(add: any): void {
    const newBird = {
      name: add.form.value.name,
      scientificName: add.form.value.scientificName,
      image: add.form.value.image,
      location: add.form.value.location,
      status: add.form.value.status,
      description: add.form.value.description
    }

    // this.birdService.addBird(add as Bird).subscribe(() => {
    //   this
    // })
//

  if (add.form.controls.name.status === "INVALID") {
    console.log("cannot submit");
    document.getElementById('name-alert').style.display('block')
    //nameAlert.style.display = 'block';
  } else if (add.form.controls.scientificName.status === "INVALID") {
      // res.send("cannot submit");
  } else if (add.form.controls.image.status === "INVALID") {
      // res.send("cannot submit");
  } else if (add.form.controls.location.status === "INVALID") {
      // res.send("cannot submit");
  } else if (add.form.controls.status.status === "INVALID") {
      // res.send("cannot submit");
  } else if (add.form.controls.description.status === "INVALID") {
      // res.send("cannot submit");
  } else {
    console.log(add);
    console.log("can submit");
    this.birdService.addBird(newBird as Bird).subscribe(() => {
      this
    })
    this.locationAngular.back()
    this.getBirds()
  }





  //console.log(add);


    //this.locationAngular.back()

    this.getBirds()
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
