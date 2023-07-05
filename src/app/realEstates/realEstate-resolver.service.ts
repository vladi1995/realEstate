import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RealEstate } from "./realEstate.model";
import { DataStorageService } from "../shared/data-storage.service";
import { Observable } from "rxjs";
import { RealEstateService } from "./realEstate.service";

@Injectable({providedIn: 'root'})
export class RealEstateResolverService implements Resolve<RealEstate[]> {
    constructor(private dataStorageService: DataStorageService, private realEstateService: RealEstateService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): RealEstate[] | Observable<RealEstate[]> | Promise<RealEstate[]> {
        const realEstates = this.realEstateService.getRealEstate();
        if (realEstates.length == 0) {
            return this.dataStorageService.fetchRealEstates();
        } else {
            return realEstates;
        }
    }
}