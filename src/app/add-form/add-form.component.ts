import { Component, OnInit } from '@angular/core';
import {Bird} from '../bird';
import {BirdService} from '../bird.service';
import { ActivatedRoute } from '@angular/router'; //Shows current snapshot of the route?
import { Location } from '@angular/common'; //Interacts with the browser URL

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private birdService: BirdService,
    private locationAngular: Location
  ) { }

  ngOnInit(): void {

  }

  name: string = ''
  scientificName: string = ''
  image: string = ''
  location: string = ''
  status: string = ''
  description: string = ''

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

  }

}






//====================================================================================================================//
//                                                      Grave Yard
//====================================================================================================================//