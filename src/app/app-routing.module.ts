import {NgModule} from '@angular/core'; //angular, need this
import {RouterModule, Routes} from '@angular/router'; //imports the RouterModule
import {BirdsIndexComponent} from './birds-index/birds-index.component'; //Imports out Birds index because we want to give it a route
import {BirdShowComponent} from './bird-show/bird-show.component'; //Imports out Bird show because we want to give it a route
import {WelcomePageComponent} from './welcome-page/welcome-page.component'; //Imports the welcome page component
import {AddFormComponent} from "./add-form/add-form.component"; //Imports the add from component
import {SearchComponentComponent} from "./search-component/search-component.component"
import {YourBirdsPageComponent} from "./your-birds-page/your-birds-page.component"

//Where we set the routes we want
const routes: Routes = [
  { path: '', redirectTo:'/welcome', pathMatch: 'full' },
  { path: 'birds', component: BirdsIndexComponent },
  { path: 'birds/:id', component: BirdShowComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'add-bird', component: AddFormComponent },
  { path: 'search', component: SearchComponentComponent },
  { path: 'your-birds', component: YourBirdsPageComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
