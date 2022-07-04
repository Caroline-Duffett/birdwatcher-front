import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Bird} from '../bird'; //Calls in the bird model/schema we made
import {BirdService} from '../bird.service'; //Imports (injects?) the bird service we set up. Service connects us to database? Brings in the data?


@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})

export class SearchComponentComponent implements OnInit {

  birds: Bird[] = []//index way
  searchTextName: string = ''
  searchTextHabitat: string = ''
  searchTextDescription: string = ''

  searchByName = true;
  searchByHabitat = false;
  searchByDescription = false;

  constructor(
    private birdService: BirdService //defines and injects the bird service we made
  ) { }


  ngOnInit(): void {
    this.getBirds();
  }


  //Gets the birds from the bird service (where the birds are being called in from database)
  getBirds(): void {
    this.birdService.getBirds()
    .subscribe(birds => this.birds = birds);
  }


  nameSearch() {
    this.searchByName = true;
    this.searchByHabitat = false;
    this.searchByDescription = false;
  }


  habitatSearch() {
    this.searchByName = false;
    this.searchByHabitat = true;
    this.searchByDescription = false;
  }

  descriptionSearch() {
    this.searchByName = false;
    this.searchByHabitat = false;
    this.searchByDescription = true;
  }


}
