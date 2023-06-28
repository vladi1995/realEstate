import { Component, OnInit } from '@angular/core';
import { RealEstate } from './realEstates/realEstate.model';
import { RealEstateService } from './realEstates/realEstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  chosenCategory: string = 'realEstateList';
  selectedRealEstate: RealEstate;

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstateService.realEstateSelected
    .subscribe(
      (realEstateChonsen: RealEstate) => {
        this.selectedRealEstate = realEstateChonsen;
      }
    )
  }

  onChooseCategory(event: string) {
    this.chosenCategory = event;
  }
}