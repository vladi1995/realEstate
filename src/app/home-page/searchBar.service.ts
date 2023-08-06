import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RealEstateInterface } from "./realEstate.interface";

@Injectable()
export class SearchBarService {
    constructor(private http: HttpClient) {}

    getRealEstates(): Observable<RealEstateInterface[]> {
        return this.http.get<RealEstateInterface[]>(`https://ng-realestate-2407b-default-rtdb.europe-west1.firebasedatabase.app/realEstates.json`);  
    }
}