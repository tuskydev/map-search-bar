import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import './Map.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibGFtYmRhbGFiczI1ZWNvc29hcCIsImEiOiJja2VhZWRhOG4wNmU5MnNxZXQ0bmhxZnU3In0.zWyuwunBSy51dulZG9gowQ';

function MapMap() {
  useEffect(() => {
    // Snippet below is to initialize the map
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/lambdalabs25ecosoap/ckeaib2n30b4f19mq6mj2dsq3', // stylesheet location
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
    });

    /*-------------- Inside Search-Bar functionality START --------------*/
    map.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
    );
    /*-------------- Track user functionality END --------------*/

    /*-------------- Outside Search-Bar functionality START --------------*/
    var geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });
    geocoder.onAdd(map);
    geocoder.addTo('.geocoder');
    /*-------------- Track user functionality END --------------*/

    /*-------------- Track user functionality START --------------*/
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      trackUserLocation: true
      })
    );
    /*-------------- Track user functionality END --------------*/

    /*-------------- Marker functionality START --------------*/
    var marker = new mapboxgl.Marker()
      .setLngLat([40, 10]) // [lng, lat]
      .addTo(map);
    /*-------------- Marker functionality END --------------*/

    
  }, []);

  return (
    <section>
      <div className="geocoder"/>
      <div id="map"/>
    </section>
  )
}

export default MapMap;
