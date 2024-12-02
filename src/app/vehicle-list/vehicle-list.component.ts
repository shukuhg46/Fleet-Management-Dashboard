import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class VehicleListComponent implements OnInit {
  vehicles: any[] = [];
  filteredVehicles: any[] = [];
  loading = false;

  @Output() selectVehicle = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.generateVehicles();
    this.filteredVehicles = this.vehicles;
  }


  private generateRandomLatitude(): number {
    return (Math.random() * ( -22.1257 - -34.8333 ) + -34.8333).toFixed(6) as unknown as number;
  }

  private generateRandomLongitude(): number {
    return (Math.random() * (32.8850 - 16.4532) + 16.4532).toFixed(6) as unknown as number;
  }

  private generateVehicles() {
    this.vehicles = [
      { "id": 1, "name": "POLO GTI", "type": "Sedan", "Timestamp": "2024-11-17T17:54:43Z", "Longitude": this.generateRandomLongitude(), "Latitude": this.generateRandomLatitude(), "pictureUrl": "assets/polo.jpg" },
      { "id": 2, "name": "MAZDA 3", "type": "SUV", "Timestamp": "2024-11-17T17:54:43Z", "Longitude": this.generateRandomLongitude(), "Latitude": this.generateRandomLatitude(), "pictureUrl": "assets/mazda3.jpg" },
      { "id": 3, "name": "KWID", "type": "HATCHBACK", "Timestamp": "2024-11-17T17:54:43Z", "Longitude": this.generateRandomLongitude(), "Latitude": this.generateRandomLatitude(), "pictureUrl": "assets/kwid.jpg" }
    ];
  }

  onSelectVehicle(vehicle: any) {
    this.selectVehicle.emit(vehicle);
  }


  filterVehicles(query: string) {
    return this.vehicles.filter(vehicle => vehicle.id.toString().includes(query));
  }


  onFilterInput(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.filteredVehicles = this.filterVehicles(query);
  }
}
