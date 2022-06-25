import { NgModule } from '@angular/core'; //angular, need this
import { RouterModule, Routes } from '@angular/router'; //imports the RouterModule
import {BirdsIndexComponent} from './birds-index/birds-index.component' //Imports out Birds index because we want to give it a route
import {BirdShowComponent} from './bird-show/bird-show.component' //Imports out Bird show because we want to give it a route


//Where we set the routes we want
const routes: Routes = [
  { path: '', redirectTo:'/birds', pathMatch: 'full'}, //not sure if I need this since it looks like it should redirect with what is already there
  { path: 'birds/:id', component: BirdShowComponent},
  { path: 'birds', component: BirdsIndexComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
