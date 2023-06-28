import { RealEstate } from "./realEstate.model";
import { TypeOfHouse } from "../shared/typeOfHouses";
import { EventEmitter, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class RealEstateService {
    public realEstateSelected = new EventEmitter<RealEstate>();

    private realEstates: RealEstate[] = [
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

    getRealEstate() {
        return this.realEstates.slice();
    }
}