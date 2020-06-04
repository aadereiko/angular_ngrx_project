import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-map',
  styles: ['agm-map { height: 600px; /* height is required */ }'],
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.less'],
})
export class TestMapComponent implements OnInit {
  latitude = 0;
  longitude = 0;
  mapType = 'roadmap';
  zoom = 13;

  selectedMarker;
  markers = [
    { lat: 22.33159, lng: 105.63233, alpha: 0.1 },
    { lat: 7.92658, lng: -12.05228, alpha: 0.2 },
    { lat: 48.75606, lng: -118.859, alpha: 0.3 },
    { lat: 5.19334, lng: -67.03352, alpha: 0.4 },
    { lat: 12.09407, lng: 26.31618, alpha: 1 },
    { lat: 47.92393, lng: 78.58339, alpha: 1 },
  ];

  addMarker(lat: number, lng: number) {
    this.markers.push({ lat, lng, alpha: 1 });
  }

  removeMarker(lat: number, lng: number): void {
    console.log(lat, lng);
    this.markers = this.markers.filter(
      (item) => item.lat !== lat || item.lng !== lng
    );
  }

  selectMarker(event) {
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude,
    };
  }

  renderCheck() {
    console.log('Counter view updated');
    return true;
  }

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.addMarker(latitude, longitude);
        this.latitude = latitude;
        this.longitude = longitude;
      }
    );
  }
}
