import { Component, Input } from '@angular/core';
import { RealEstate } from '../realEstate.model';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.css']
})
export class RealEstateDetailsComponent {
  @Input() realEstateToDetailsFromApp: RealEstate;

  onShow() {
    console.log(this.realEstateToDetailsFromApp);
  }
}
