import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RealEstate } from '../realEstate.model';
import { TypeOfHouse } from 'src/app/shared/typeOfHouses';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.css']
})
export class RealEstatesListComponent {
  @Output() realEstateToDetailsFromList = new EventEmitter<RealEstate>();

  onItemToDetails(event: RealEstate) {
    this.realEstateToDetailsFromList.emit(event);
  }

  realEstates: RealEstate[] = [
    new RealEstate(
      "2 room beautiful apartment", 
      "The best apartment in the area",
      "https://fpg.roomsketcher.com/image/topic/28/image/2-Bedroom-Apartment-Plan-3D.jpg",
      TypeOfHouse.Apartment, 45000, 65, "Montana"),

      new RealEstate(
        "3 room beautiful apartment", 
        "The best apartment in the area",
        "https://medialibrarycf.entrata.com/2603/MLv3/4/23/2022/08/30/031303/630e7d5f8aaab2.86377676578.jpg",
        TypeOfHouse.Apartment, 65000, 75, "Sofia"),
  ];
}
