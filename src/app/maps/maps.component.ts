import { Component, OnInit } from '@angular/core';
import {GMapModule} from 'primeng/gmap';
import { } from '@types/googlemaps';

declare var google: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }
  options;
  overlays: any[];

   //map: google.maps.Map;

  ngOnInit() {
    this.options = {
            center: {lat: 48.7454517, lng: 11.4392852},
            zoom: 12
        };

        this.overlays = [
            new google.maps.Marker({position: {lat: 48.7454517, lng: 11.4392852}, title:"Konyaalti"}),
            new google.maps.Circle({center: {lat: 36.90707, lng: 30.56533}, fillColor: '#1976D2', fillOpacity: 0.35, strokeWeight: 1, radius: 1500}),
            new google.maps.Polyline({path: [{lat: 36.86149, lng: 30.63743},{lat: 36.86341, lng: 30.72463}], geodesic: true, strokeColor: '#FF0000', strokeOpacity: 0.5, strokeWeight: 2})
        ];
  }

   zoomIn(map) {
        map.setZoom(map.getZoom()+1);
    }

    

}