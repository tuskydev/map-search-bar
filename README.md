# Map Search-Bar Solo Project
### Repo made specifically to implement a search bar to a map using MapBox API.



### Things learned:
* MapBox API has a huge learning curve if used with React. 
* MapBox's Docs are a struggle to decipher since they show code snippets in HTML/JS only.
* MapBox's API has search-bar functionality, while React-map-gl's API doesn't.
* After asking the help of a friend (Bogdan), progress was made on this project after 3 weeks of failure.

### Overall, a productive project which allowed better understanding of MapBox's API.

## Preview of work done:
### Image of Search-bar inside of Map
![image](https://user-images.githubusercontent.com/52723004/93210770-2e908180-f72e-11ea-9152-bc066418a5ec.png)

### Image of Search-bar outside of Map and search recommendation preview
![image](https://user-images.githubusercontent.com/52723004/93210811-4536d880-f72e-11ea-990b-89018003fe43.png)

## Steps to recreate:

### In console:
`
npm install mapbox-gl --save
`

`
npm install --save @mapbox/mapbox-gl-geocoder
`
### Add these lines to the App.js file:
`
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
`
### Choose any example code from the Docs here and adjust to the best fit.
`
https://docs.mapbox.com/mapbox-gl-js/example/`
