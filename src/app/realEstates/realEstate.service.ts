import { RealEstate } from "./realEstate.model";
import { TypeOfHouse } from "../shared/typeOfHouses";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
import { DataStorageService } from "../shared/data-storage.service";

@Injectable({providedIn: 'root'})
export class RealEstateService {
    realEstateChanged = new Subject<RealEstate[]>();

    private realEstates: RealEstate[] = [];

    constructor(private http: HttpClient) {}

    getRealEstate() {
      return this.realEstates.slice();
    }

    getCurrentRealEstate(index: number) {
      return this.realEstates[index];
    }

    addRealEstate(realEstate: RealEstate) {
      this.realEstates.push(realEstate);

      // this.dataStorageService.addNewRealEstate(realEstate).subscribe((data: any) => {
      //   console.log(data);
      // });

      this.http.post('https://ng-realestate-2407b-default-rtdb.europe-west1.firebasedatabase.app/realEstates.json', realEstate)
      .subscribe(resolveData => {
        console.log(resolveData);
      });
      
      this.realEstateChanged.next(this.realEstates.slice());
    }

    updateRealEstate(index: number, newRealEstate: RealEstate) {
      this.realEstates[index] = newRealEstate;
      this.realEstateChanged.next(this.realEstates.slice());
    }

    deleteRealEstate(index: number) {
      this.realEstates.splice(index, 1);
      this.realEstateChanged.next(this.realEstates.slice());
    }

    setRealEstates(realEstates: RealEstate[]) {
      this.realEstates = realEstates;
      this.realEstateChanged.next(this.realEstates.slice());
    }
}