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

  // addSubmit(name: string): void {
  //  name = name.trim();
  //  if (!name) { return; }
  //  this.birdService.addBird({ name } as Bird)
  //    .subscribe(bird => {
  //      this.birds.push(bird);
  //    });
  //  }


  submitted = false;

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

  addSubmit(name: string, scientificName: string, image: string, location: string, status: string, description: string ): void {
   name = name.trim();
   scientificName =  scientificName.trim();
   image = image.trim();
   location = location.trim();
   status = status.trim();
   description = description.trim();

   if (!name, !scientificName, !image, !location, !status, !description) { return; }
   this.birdService.addBird({ name, scientificName, image, location, status, description } as Bird)
     .subscribe(bird => {
       this.birds.push(bird);
     });
   }

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

}
