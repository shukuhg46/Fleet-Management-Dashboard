import { Component, Input, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class VehicleDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() vehicle: any;

  private map: L.Map | undefined;
  private marker: L.Marker | undefined;
  locationName: string = '';
  private locationUpdateInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.locationUpdateInterval = setInterval(() => this.updateLocation(), 30000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['vehicle'] && this.vehicle) {
      this.initMap();
    }
  }

  ngOnDestroy() {
    if (this.locationUpdateInterval) {
      clearInterval(this.locationUpdateInterval);
    }
  }

  private initMap(): void {
    if (this.map) {
      this.map.remove();
    }


    this.map = L.map('map').setView([this.vehicle.Latitude, this.vehicle.Longitude], 13);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    this.marker = L.marker([this.vehicle.Latitude, this.vehicle.Longitude]).addTo(this.map)
      .bindPopup(`<b>${this.vehicle.name}</b><br/>${this.vehicle.Longitude} <br/br>${this.vehicle.Latitude}`);


    this.getLocationName(this.vehicle.Latitude, this.vehicle.Longitude).subscribe((location: any) => {
      if (location && location.address) {
        this.locationName = location.address.road || location.address.city || 'Unknown Location';
        this.marker?.bindPopup(`<b>${this.vehicle.name}</b><br/>Longitude: ${this.vehicle.Longitude} Latitude: ${this.vehicle.Latitude} <br/>Location: ${this.locationName}`).openPopup();
      }
    });
  }

  private updateLocation(): void {
    //  vehicle location update
    console.log('Refreshing vehicle location...');

    // Assuming the vehicle.Latitude and `vehicle.Longitude` have been updated from a server/API
    if (this.vehicle) {
      this.vehicle.Latitude += (Math.random() - 0.5) * 0.001;
      this.vehicle.Longitude += (Math.random() - 0.5) * 0.001;
    }
    //updated  position of a car
    if (this.map && this.marker) {
      this.marker.setLatLng([this.vehicle.Latitude, this.vehicle.Longitude]);
      this.map.setView([this.vehicle.Latitude, this.vehicle.Longitude]);

      // Update location name based for new position
      this.getLocationName(this.vehicle.Latitude, this.vehicle.Longitude).subscribe((location: any) => {
        if (location && location.address) {
          this.locationName = location.address.road || location.address.city || 'Unknown Location';
          this.marker?.bindPopup(`<b>${this.vehicle.name}</b><br/>Longitude: ${this.vehicle.Longitude} Latitude: ${this.vehicle.latitude} <br/>Location: ${this.locationName}`).openPopup();
        }
      });
    }
  }

  private getLocationName(latitude: number, longitude: number): Observable<any> {

    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    return this.http.get<any>(url);
  }
}
