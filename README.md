# Birdwatcher
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2. The frontend to my capstone project for General Assembly.

## Explanation of the technologies used
Angular with Typescript, Bootstrap, Express.js, and Rxjs were used for the development of the frontend. The purpose of this app was to make it easier for bird watchers to log which birds they have spotted, while also providing the user with information on different bird species. Users can view, edit, delete, and create birds on this app. A bird service was made to help implement these CRUD functionalities throughout the app. To make this service, I used HttpClient and HttpHeaders from angular and Observable, of, catchError, and map from Rxjs. The Angular modules I used were the BrowserModule, HttpClientModule, AppRoutingModule, and the FormsModule. In the app routing module, I created six routes, one to reroute to the welcome component, one for the welcome component, and four others for the index, show, add, and search components. The use of Angular's Location made it easy to create back buttons. The ActivatedRoute from angular router also made it possible to single out the selected bird for its show page. Due to issues with user authorization, which you can read more about in unsolved problems, there is currently no way for individuals to log their birds. I also utilized pipes to create a search feature and alphabetize the data. For the backend I used Express.js and Node.js (You can read more about it on the backend ReadMe). MongoDB Atlas was used as the database.

## Approach taken
The goal of this project was to learn a new technology on my own and be able to create a full CRUD app. I did some research on webstacks and decided to try out Angular (MEAN stack).


## Links
 - GitHub frontend: https://bird-watcher-front.herokuapp.com/welcome
 - GitHub backend: https://bird-watcher-back.herokuapp.com/birds
 - Heroku app frontend: https://github.com/Caroline-Duffett/birdwatcher-front
 - Heroku app backend: https://github.com/Caroline-Duffett/birdwatcher-back

## Installation Instructions


## Paths


## Unsolved Problems


## Sources
- Bird information: https://www.allaboutbirds.org/news/ & their respective Wikipedia pages
- Tour of Heroes tutorial: https://angular.io/tutorial
- Template-driven forms tutorial: https://angular.io/guide/forms
- Filter pipes: https://www.youtube.com/watch?v=1TFSibbnkj0
- Heroku deployment: https://www.youtube.com/watch?v=KVFrTf4VD2o
- Bootstrap Documentation: https://getbootstrap.com/docs/5.2/getting-started/introduction/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
