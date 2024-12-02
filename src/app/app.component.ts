import { Component } from '@angular/core';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [VehicleListComponent, VehicleDetailComponent,HttpClientModule]
})
export class AppComponent {
  selectedVehicle: any;

  onSelectVehicle(vehicle: any) {
    this.selectedVehicle = vehicle;
  }
}
