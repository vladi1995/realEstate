import { Component, Input } from '@angular/core';
import { RealEstate } from './realEstates/realEstate.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenCategory: string = 'realEstateList';

  onChooseCategory(event: string) {
    this.chosenCategory = event;
  }

  realEstateToDetailsFromApp: RealEstate;

  onShowDetails(event: RealEstate) {
    this.realEstateToDetailsFromApp = event;
  }
}