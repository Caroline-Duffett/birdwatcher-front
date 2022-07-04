// Modules we need
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //exports app to browser
import { HttpClientModule } from '@angular/common/http'; //Lets us connect to http links
import { AppRoutingModule } from './app-routing.module'; //let us set up routes to different "pages". Single page app so it is not really changing but can set up different routes like you would if there were
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here?, Lets us use forms


//Filter Pipes
import { BirdNameFilterPipe } from './filter-pipes/name-filter.pipe';
import { BirdHabitatFilterPipe } from './filter-pipes/habitat-filter.pipe';
import { BirdDescriptionFilterPipe } from './filter-pipes/description-filter.pipe';
import { AlphabeticalOrderPipe } from './filter-pipes/alpha-order.pipe';



// Components
import { AppComponent } from './app.component';
import { BirdsIndexComponent } from './birds-index/birds-index.component';
import { BirdShowComponent } from './bird-show/bird-show.component';
import { AddFormComponent } from './add-form/add-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { YourBirdsPageComponent } from './your-birds-page/your-birds-page.component';
import { YourBirdsNavComponent } from './your-birds-nav/your-birds-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsIndexComponent,
    BirdShowComponent,
    AddFormComponent,
    WelcomePageComponent,
    NavbarComponent,
    SearchComponentComponent,
    LoginModalComponent,
    YourBirdsPageComponent,
    YourBirdsNavComponent,
    BirdNameFilterPipe,
    BirdHabitatFilterPipe,
    BirdDescriptionFilterPipe,
    AlphabeticalOrderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
