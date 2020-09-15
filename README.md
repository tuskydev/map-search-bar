# Map Search-Bar Solo Project
### Repo made specifically to implement a search bar to a map using MapBox API.



### Things learned:
* MapBox API has a huge learning curve if used with React. 
* MapBox's Docs are a struggle to decipher since they show code snippets in HTML/JS only.
* MapBox's API has search-bar functionality, while React-map-gl's API doesn't.
* After asking the help of a friend (Bogdan), progress was made on this project after 3 weeks of failure.

### Steps to recreate:

#### In console:
`
npm install mapbox-gl --save
`

`
npm install --save @mapbox/mapbox-gl-geocoder
`
##### Add these lines to the App.js file:
`
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
`
##### Choose any example code from the Docs here and adjust to the best fit.
`
https://docs.mapbox.com/mapbox-gl-js/example/`
