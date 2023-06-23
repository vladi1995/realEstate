import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../realEstate.model';
import { TypeOfHouse } from 'src/app/shared/typeOfHouses';
import { RealEstateService } from '../realEstate.service';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.css'],
  providers: [RealEstateService],
})
export class RealEstatesListComponent implements OnInit {
  realEstates: RealEstate[];

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstates = this.realEstateService.getRealEstate();
  }
}
