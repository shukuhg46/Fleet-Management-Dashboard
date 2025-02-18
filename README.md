
//##autogenerated
# VehicleTrackingDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

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

Created by Nzuzo 
****Vehicle Fleet Management Dashboard*****
Overview
This application is a Fleet Management Dashboard that allows users to view and manage vehicles. It features a map for displaying vehicle locations, and a filter to search for vehicles by ID. The app is built using Angular and Leaflet for the map functionality. It uses tailwind css

*****Prerequisites*****
Before you run the application, make sure you have the following installed:

Node.js: (LTS version recommended) Download Node.js
npm (Node Package Manager) comes bundled with Node.js
Angular CLI (optional, but recommended for ease of use)
To check if these are installed, you can use the following commands:

****packages that you must install for your app to run smoothly****
Leaflet 
npm install leaflet

Angular 
npm install @angular/cli --save-dev

Bootstrap 
npm install bootstrap

TailwindCSS 
npm install tailwindcss postcss autoprefixer
npx tailwindcss init

RxJS 
npm install rxjs

Angular Common
npm install @angular/common

HttpClient Module
npm install @angular/common/http

Angular Forms Module
npm install @angular/forms

NB: for leaflet, make sure that you also import it in your angular.json
Go to angualar.json and replace the style with this one
"styles": [
  "src/styles.css",
  "node_modules/leaflet/dist/leaflet.css"
],

Taiwind css
Make sure to configure it properly in the tailwind.config.js file and in your postcss.config.js if you dont see the file please create it




To check if nide, npm and anguaar are installed run the commands below
bash
Copy code
node -v
npm -v
ng version  


Running the App Locally on your machine
1. Extract the Zipped Folder
Once you've received the zipped folder containing the app, extract it to a directory on your local machine.

2. Install Dependencies
Navigate to the project folder using the terminal or command prompt and run the following command to install the necessary dependencies:
npm install
This will install the required packages listed in the package.json file.

3. Run the App
Once the dependencies are installed, you can start the app with the following command:

ng serve
This will start a local development server. By default, the application will be available at:

http://localhost:4200

You should see the "Fleet Management Dashboard" page in your browser.

4. Auto-Refresh Configuration
Angular uses Hot Module Replacement (HMR) during development. This allows the application to automatically refresh the page whenever a change is made to the code. To enable this feature:

Start the app with auto-refresh enabled by using the following command:
ng serve --hmr

else there is a updateLocation() on vehicle-detail.component.ts that handles auto refresh

5. Error Handling and Debugging

If you encounter any issues with missing packages or dependencies, make sure you have installed all dependencies using npm install.

6. Accessing the Application
Once the app is running, it should automatically open in your default web browser. If not, simply navigate to http://localhost:4200.

7. Making Changes
Code Structure: The app’s main components are located in the following directories:
src/app/vehicle-list/: Contains the vehicle list component.
src/app/vehicle-detail/: Contains the vehicle detail component, which includes the map functionality.
src/app/app.component.ts: The root component that ties everything together.
src/assets/: Contains any static assets like images (e.g., assets/polo.jpg).
