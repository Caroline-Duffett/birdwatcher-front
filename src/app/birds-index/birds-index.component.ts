import { Component, OnInit } from '@angular/core'; //Makes this a component in angular
import {Bird} from '../bird'; //Calls in the bird model/schema we made
import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?
import { Location } from '@angular/common'; //Interacts with the browser URL
import { AuthService } from '../auth.service';

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
    private location: Location,
    private auth: AuthService,
  ) {}

  //Calls in the birds after component is constructured. Lifecycle hook
  ngOnInit(): void {
    this.getBirds();
    this.getUser()
  }

  //Gets the birds from the bird service (where the birds are being called in from database)
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }

  //  for logging in a user
  currentUser: any = {
    username: '',
    password: '',
    admin: false
  }

  //Get the logged in user
  getUser(): void {
    this.auth.getUser()
    .subscribe(user => this.currentUser = user)
    this.currentUser = this.currentUser.currentUser
    console.log(this.currentUser);
  }

}
