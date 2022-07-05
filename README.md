# Birdwatcher
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2. The frontend to my capstone project for General Assembly.

## Explanation of the technologies used
Angular with Typescript, Bootstrap, Express.js, Node.js and Rxjs were used for the development of the frontend. The purpose of this app was to make it easier for bird watchers to log which birds they have spotted, while also providing the user with information on different bird species. Users can view, edit, delete, and create birds on this app. A bird service was made to help implement these CRUD functionalities throughout the app. To make this service, I used HttpClient and HttpHeaders from angular and Observable, of, catchError, and map from Rxjs. The Angular modules I used were the BrowserModule, HttpClientModule, AppRoutingModule, and the FormsModule. In the app routing module, I created six routes, one to reroute to the welcome component, one for the welcome component, and four others for the index, show, add, and search components. The use of Angular's Location made it easy to create back buttons. The ActivatedRoute from angular router also made it possible to single out the selected bird for its show page. Bootstrap was used for most of the styling. Due to issues with user authorization, which you can read more about in unsolved problems, there is currently no way for individuals to log their birds. I also utilized pipes to create a search feature and alphabetize the data. For the backend I used Express.js and Node.js (You can read more about it on the backend ReadMe). MongoDB Atlas was used as the database.

## Approach taken
The goal of this project was to learn a new technology on my own and be able to create a full CRUD app. I did some research on webstacks and decided to try out Angular (MEAN stack). To start, I checked out Angular's official documentation. Angular offers a tutorial called "Tour of Heroes" to walk you through how to build an Angular app. I went through the tutorial twice before beginning my own app. Once my backend was setup and working on Postman, I followed along with the heroes tutorial to set up my app. When I ran into problems, I would refer to the documentation or YouTube videos. I linked the sources I used below for anyone who wants to check those out below. Once I got the CRUD routes working, I did some basic styling with Bootstrap. I wanted to make sure I would be able to deploy my app to Heroku, so I did that very early on in the project. It was a challenge, but I eventually got it deployed by watching a helpful video. Once I had MVP done, I started to work on my stretch goals. My main stretch goal was to have user authentication. I spent over a week trying to implement it, but I could not get it working smoothly enough by the time this project was due. I gutted the main branch from all user authentication components, so only the working code would be presented. If you checkout my other branches you can see what I was able to accomplish with user auth. When I needed a break from user authentication I would work on other parts of the project, like styling and the search bars.


## Links
 - GitHub frontend: https://bird-watcher-front.herokuapp.com/welcome
 - GitHub backend: https://bird-watcher-back.herokuapp.com/birds
 - Heroku app frontend: https://github.com/Caroline-Duffett/birdwatcher-front
 - Heroku app backend: https://github.com/Caroline-Duffett/birdwatcher-back

## Installation Instructions
I do not think there is anything the user needs to install to use this app. All the user needs to do is open it. I want to note that it may take a second for the Heroku backend to wake up if the app has not been used.


## Unsolved Problems
As mentioned, I was unable to get user authentication working. I was using express-session with a sessions controller and users controller on the backend. I think the backend was set up correctly because creating new users, logging in, getting the user, and logging out were all working on Postman. On the frontend you could create a new user and it would post to the database. I also think the user was able to login based off console logs, and the cookies in the dev tools. Same with logging out. The real trouble was retrieving the user's data on the frontend. The closest I got was getting the username to display, but not without lots of bugs and manipulating the code during the login process. You had to have the HTML with the username commented out. Once you entered the login info you had to hit login until you saw the user data console.log. Typically, this took two or three clicks. Once the user was console logging you could comment back in the HTML that contained the user data and it would display. Obviously, this does not work for production purposes. I needed to be able to grab the user on one click. I needed to be able to check if they were an admin and to say it was them that logged a bird. I also do not know how I would have passed the logged in user to the other components since they are so separate.

Had I gotten user auth working there would have been a user's page showing only the birds they logged in a table. They would be using a separate birds model and have full CRUD capabilities there. Then I would have changed the birds index to only be edited by admins. If I could get that far I was going to make it so the users could also add birds from the birds index page and not just from scratch as another option when creating a bird.

I am sure there are other bugs in my app or way I could have done things better. This is not necessarily a bug, but originally, I had the edit a bird modal save changes and close at the same time. This was working nicely for a while with no issue. Then I made my bird schema include more keys and I also had more birds in the database. Increasing the data size broke the edit when it submit and closed at the same time. So now the user has the save their edit changes and then close the modal separately. I tried my best to condense this, but I was unsuccessful.  


## Sources
- Bird information: https://www.allaboutbirds.org/news/ & their respective Wikipedia pages
- Tour of Heroes tutorial: https://angular.io/tutorial
- Template-driven forms tutorial: https://angular.io/guide/forms
- Filter pipes: https://www.youtube.com/watch?v=1TFSibbnkj0
- Heroku deployment: https://www.youtube.com/watch?v=KVFrTf4VD2o
- Bootstrap Documentation: https://getbootstrap.com/docs/5.2/getting-started/introduction/
- Angular Documentation: https://angular.io/

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
