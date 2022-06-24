// import { Component,  OnInit} from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
// import { FormsModule} from '@angular/forms';
//
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css'],
//   // exportAs: 'ngForm'
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(
//     private birdService: BirdService,
//   ) { }
//
//     ngOnInit(): void {
//
//     }
//
//
//   submit(add: any) {
//     console.log("form submitted", add);
//
//     this.birdService.addBird(add as Bird).subscribe(() => {
//           this
//     })
//   }
//
// }





//--- More complete version of page load, no errors
import { Component, OnInit } from '@angular/core';
import {Bird} from '../bird';
import {BirdService} from '../bird.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {

  }

  name = 'test'
  scientificName = 'test'
  image = 'https://www.birds.cornell.edu/home/wp-content/uploads/2018/10/BirdAcademy-480x360.jpg'
  location = 'test'
  status = 'test'
  description = 'test'

  submit(name: string, scientificName: string, image: string, location: string, status: string, description: string): void {

    const newBird = {
      _id: null,
      // user: unknown,
      name: name,
      scientificName: scientificName,
      image: image,
      location: location,
      status: status,
      description: description
    }

    console.log("form submitted", newBird);

    this.birdService.addBird(newBird as Bird).subscribe(() => {
      this
    })

  }

}









































// // Attempt with any still blank and leaves out _id
// import { Component,  OnInit} from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
// import { FormsModule} from '@angular/forms';
//
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css'],
//   // exportAs: 'ngForm'
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(
//     private birdService: BirdService,
//   ) { }
//
//     ngOnInit(): void {
//
//     }
//
//   submit(add: any) {
//     console.log("form submitted", add);
//
//     this.birdService.addBird(add as Bird).subscribe(() => {
//           this
//     })
//   }
//
// }







// import { Component} from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
// import { FormsModule} from '@angular/forms';
//
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css'],
//   // exportAs: 'ngForm'
// })
//
// export class AddFormComponent {
//
//   submit(add: any) {
//     console.log("form submitted", add);
//   }
//
// }














// Version with OnInit and constructor
// import { Component,  OnInit} from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
// import { FormsModule} from '@angular/forms';
//
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css'],
//   // exportAs: 'ngForm'
// })
//
// export class AddFormComponent implements OnInit
//
//   constructor(
//     private birdService: BirdService,
//   ) { }
//
//     ngOnInit(): void {
//
//     }
//
//   submit(add) {
//     console.log("form submitted", add);
//   }
//
// }

















//--- Model Trys
//model = ('', '', '', '', '', '')


//Did not work at all
// model.name = ''
// model.scientificName: ''
// model.image:''
// model.location: ''
// model.status: ''
// model.description: ''


// //Does not work and every input is the same
// model = {
//   name: '',
//   scientificName: '',
//   image: '',
//   location: '',
//   status: '',
//   description:''
// }






// //--- If neeed to reset here, is empty component
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//
//
// }



// //--- FormBuilder Attempt (does not work)
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
// import { FormBuilder } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   birds = this.birdService.getBirds();
//
//   addFrom = this.formBuilder.group({
//     _id: null,
//     name: '',
//     scientificName: '',
//     image: '',
//     location: '',
//     status: '',
//     description: '',
//   })
//
//   constructor(
//     private birdService: BirdService,
//     private formBuilder: FormBuilder
//   ) { }
//
//   ngOnInit(): void {
//
//   }
//
//   addSubmit(): void {
//
//     // const newBird = {
//     //   _id: null,
//     //   //_id: "",
//     //   // user: unknown,
//     //   name: this.name,
//     //   scientificName: this.scientificName,
//     //   image: this.image,
//     //   location: this.location,
//     //   status: this.status,
//     //   description: this.description
//     // }
//
//     // this.birdService.addBird(newBird as Bird).subscribe(() => {
//     //   this
//     // })
//
//     // addBird(this.addFrom.value as Bird).subscribe(() => {
//     //   this
//     // })
//
//     this.addFrom.value
//
//     // this.addFrom.value.addBird as Bird).subscribe(() => {
//     //   this
//     // })
//
//   }
//
// }


// //--- Can't change local variables
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   name = ''
//   scientificName = ''
//   image = ''
//   location = ''
//   status = ''
//   description = ''
//
//
//   addSubmit(): void {
//
//     const newBird = {
//       _id: null,
//       //_id: "",
//       // user: unknown,
//       name: this.name,
//       scientificName: this.scientificName,
//       image: this.image,
//       location: this.location,
//       status: this.status,
//       description: this.description
//     }
//
//     this.birdService.addBird(newBird as Bird).subscribe(() => {
//       this
//     })
//
//   }
//
// }









// //--- More complete version of page load, no errors
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   name = ''
//   scientificName = ''
//   image = ''
//   location = ''
//   status = ''
//   description = ''
//
//   addSubmit(): void {
//
//     const newBird = {
//       _id: null,
//       // user: unknown,
//       name: this.name,
//       scientificName: this.scientificName,
//       image: this.image,
//       location: this.location,
//       status: this.status,
//       description: this.description
//     }
//
//     this.birdService.addBird(newBird as Bird).subscribe(() => {
//       this
//     })
//
//   }
//
// }



// //--- Lets Page load does  not post, however no errors
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   name = ''
//   scientificName= ''
//   image = ''
//   location = ''
//   status = ''
//   description = ''
//
//   addSubmit(): void {
//
//     const newBird = {
//       name: this.name,
//       scientificName: this.scientificName,
//       image: this.image,
//       location: this.location,
//       status: this.status,
//       description: this.description
//     }
//   }
//
// }



// //--- Attempt 1 (Declaration or statement expected)
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   name = ''
//   scientificName= ''
//   image = ''
//   location = ''
//   status = ''
//   description = ''
//
//   addSubmit(): void {
//     const newBird = {
//       name: this.name,
//       scientificName: this.scientificName,
//       image: this.image,
//       location: this.location,
//       status: this.status,
//       description: this.description
//     }
//   }
//
// }



//--- Attempt 2 (Get lots of errors)
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   addSubmit(name: string, scientificName: string, image: string, location: string, status: string, description: string ): void {
//    name = name.trim();
//    scientificName =  scientificName.trim();
//    image = image.trim();
//    location = location.trim();
//    status = status.trim();
//    description = description.trim();
//
//    if (!name, !scientificName, !image, !location, !status, !description) { return; }
//    this.birdService.addBird({ name, scientificName, image, location, status, description } as Bird)
//    }
//
// }











//---------------- Old Notes Below (Two of these way did not have errors)----//
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//  //  addSubmit(name: string): void {
//  //   name = name.trim();
//  //   if (!name) { return; }
//  //   this.birdService.addBird({ name } as Bird)
//  //     .subscribe(bird => {
//  //       this.birds.push(bird);
//  //     });
//  // }
//
//   // model = new Bird('', '', '', '', '', '', '');
//   //
//   // submitted = false;
//   //
//   // addSubmit() {this.submitted = true;}
//   //
//   // newBird() {
//   //   this.model = new Bird('', '', '', '', '', '', '');
//   // }
//
//   // newBird() {
//   //   this.value = new Bird();
//   // }
//
// }

//--- Way one
// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// //import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
//
// export class AddFormComponent implements OnInit {
//
//  //  addSubmit(name: string): void {
//  //   name = name.trim();
//  //   if (!name) { return; }
//  //   this.birdService.addBird({ name } as Bird)
//  //     .subscribe(bird => {
//  //       this.birds.push(bird);
//  //     });
//  // }
//
//    class Bird {
//      name = '';
//      scientificName = '';
//      image = '';
//      location = '';
//      status = '';
//      description = '';
//    }
//
//   const model = new Bird();
//
//   submitted = false;
//
//   addSubmit() {this.submitted = true;};
//
//   // newBird() {
//   //   this.model = new Bird('', '', '', '', '', '', '');
//   // }
//
//   // newBird() {
//   //   this.value = new Bird();
//   // }
//
// }





// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   // model = new Bird ('', '', '', '', '', '')
//   //
//   // addSubmit(){
//   //   this.model = new Bird('', '', ''. '', '', '')
//   // }
//   //
//   // addSubmit(name: string): void {
//   //  name = name.trim();
//   //  if (!name) { return; }
//   //  this.birdService.addBird({ name } as Bird)
//   //    .subscribe(bird => {
//   //      this.birds.push(bird);
//   //    });
//   //  }
//
//
//   // submitted = false;
//   //
//   // addSubmit() {
//   //   this.submitted = true;
//   // }
//
//
//   // addSubmit(name: string): void {
//   //  name = name.trim();
//   //  if (!name) { return; }
//   //  this.birdService.addBird({ name } as Bird)
//   //    .subscribe(bird => {
//   //      this.birds.push(bird);
//   //    });
//   //  }
//
//   // addSubmit(name: string, scientificName: string, image: string, location: string, status: string, description: string ): void {
//   //    name = name.trim();
//   //    scientificName =  scientificName.trim();
//   //    image = image.trim();
//   //    location = location.trim();
//   //    status = status.trim();
//   //    description = description.trim();
//   //
//   //    if (!name, !scientificName, !image, !location, !status, !description) {
//   //      return;
//   //    }
//   //    this.birdService.addBird({ name, scientificName, image, location, status, description} as Bird)
//   //      // .subscribe(bird => {
//   //      //   this.birds.push(bird);
//   //      // });
//   //     .subscribe(bird => {
//   //       this.birds.push(bird);
//   //     });
//   // }
//
//   // model = new Bird ('', '', '', '', '', '')
//
//
//   // name: string = ''
//   // scientificName: string = ''
//   // image: string = ''
//   // location: string = ''
//   // status: string = ''
//   // description: string = ''
//
//
//
//
//   name = ''
//   scientificName= ''
//   image = ''
//   location = ''
//   status = ''
//   description = ''
//
//
//   // name: string = ''
//   // scientificName: string = ''
//   // image: string = ''
//   // location: string = ''
//   // status: string = ''
//   // description: string = ''
//
//   // model = (
//   //   this.name,
//   //   this.scientificName,
//   //   this.image,
//   //   this.location,
//   //   this.status,
//   //   this.description
//   // );
//
//
//   addSubmit(): void {
//     const newBird = {
//       name: this.name,
//       scientificName: this.scientificName,
//       image: this.image,
//       location: this.location,
//       status: this.status,
//       description: this.description
//     }
//   }
//
// }









// import { Component, OnInit } from '@angular/core';
// import {Bird} from '../bird';
// import {BirdService} from '../bird.service';
//
// @Component({
//   selector: 'app-add-form',
//   templateUrl: './add-form.component.html',
//   styleUrls: ['./add-form.component.css']
// })
//
// export class AddFormComponent implements OnInit {
//
//   newBird: Bird
//
//   name: string = ''
//   scientificName: string = ''
//   image: string = ''
//   location: string = ''
//   status: string = ''
//   description: string = ''
//
//
//   constructor(private birdService: BirdService) { }
//
//   ngOnInit(): void {
//
//   }
//
//   addSubmit(): void {
//     const newBird = {
//       name: this.name,
//       scientificName: this.scientificName,
//       image: this.image,
//       location: this.location,
//       status: this.status,
//       description: this.description
//     }
//
//     this.birdService.addBird(newBird as Bird).subscribe(() => {
//         this
//     })
//   }









  // addSubmit(name: string): void {
  //  name = name.trim();
  //  if (!name) { return; }
  //  this.birdService.addBird({ name } as Bird)
  //    .subscribe(bird => {
  //      this.birds.push(bird);
  //    });
  //  }


  //submitted = false;

  // addSubmit() {
  //   this.submitted = true;
  // }


  // addSubmit(name: string): void {
  //  name = name.trim();
  //  if (!name) { return; }
  //  this.birdService.addBird({ name } as Bird)
  //    .subscribe(bird => {
  //      this.birds.push(bird);
  //    });
  //  }

  // addSubmit(name: string, scientificName: string, image: string, location: string, status: string, description: string ): void {
  //  name = name.trim();
  //  scientificName =  scientificName.trim();
  //  image = image.trim();
  //  location = location.trim();
  //  status = status.trim();
  //  description = description.trim();
  //
  //  if (!name, !scientificName, !image, !location, !status, !description) { return; }
  //  this.birdService.addBird({ name, scientificName, image, location, status, description } as Bird)
  //    // .subscribe(bird => {
  //    //   this.birds.push(bird);
  //    // });
  //  }

  //model = new Bird ('', '', '', '', '', '')

  //
  // name: string = ''
  // scientificName: string = ''
  // image: string = ''
  // location: string = ''
  // status: string = ''
  // description: string = ''


  // name = ''
  // scientificName= ''
  // image = ''
  // location = ''
  // status = ''
  // description = ''
  //
  // model = (
  //   this.name,
  //   this.scientificName,
  //   this.image,
  //   this.location,
  //   this.status,
  //   this.description
  // );


  // name: string = ''
  // scientificName: string = ''
  // image: string = ''
  // location: string = ''
  // status: string = ''
  // description: string = ''
  //
  //
  // addSubmit(): void {
  //
  //   const newBird = {
  //     name: this.name,
  //     scientificName: this.scientificName,
  //     image: this.image,
  //     location: this.location,
  //     status: this.status,
  //     description: this.description
  //   }
  // }

//}
