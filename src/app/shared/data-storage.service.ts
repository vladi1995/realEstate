import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RealEstateService } from "../realEstates/realEstate.service";
import { RealEstate } from "../realEstates/realEstate.model";
import { tap, pipe } from "rxjs";

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient,
        private realEstateService: RealEstateService) { }

    storeRealEstates() {
        const realEstate = this.realEstateService.getRealEstate();
        this.http.put('https://ng-realestate-2407b-default-rtdb.europe-west1.firebasedatabase.app/realEstates.json', realEstate).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchRealEstates() {
        return this.http.get<RealEstate[]>('https://ng-realestate-2407b-default-rtdb.europe-west1.firebasedatabase.app/realEstates.json')
        .pipe(tap(realEstates => {
            this.realEstateService.setRealEstates(realEstates);
        }));
    }
}