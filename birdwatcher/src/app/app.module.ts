// Modules we need
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //exports app to browser
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here?, Lets us use forms
import { HttpClientModule } from '@angular/common/http'; //Lets us connect to http links
import { AppRoutingModule } from './app-routing.module'; //let us set up routes to different "pages". Single page app so it is not really changing but can set up different routes like you would if there were

// Components
import { AppComponent } from './app.component';
import { BirdsIndexComponent } from './birds-index/birds-index.component';
import { BirdShowComponent } from './bird-show/bird-show.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdsIndexComponent,
    BirdShowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
