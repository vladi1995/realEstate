import { Component } from '@angular/core';
import { RealEstate } from '../realEstate.model';
import { TypeOfHouse } from 'src/app/shared/typeOfHouses';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.css']
})
export class RealEstatesListComponent {
  realEstates: RealEstate[] = [
    new RealEstate(
      "2 room beautiful apartment", 
      "The best apartment in the area",
      "https://fpg.roomsketcher.com/image/topic/28/image/2-Bedroom-Apartment-Plan-3D.jpg",
      TypeOfHouse.Apartment, 45000, 65, "Montana"),

      new RealEstate(
        "2 room beautiful apartment", 
        "The best apartment in the area",
        "https://fpg.roomsketcher.com/image/topic/28/image/2-Bedroom-Apartment-Plan-3D.jpg",
        TypeOfHouse.Apartment, 45000, 65, "Montana"),
  ];
}
