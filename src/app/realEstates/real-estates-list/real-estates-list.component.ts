import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() realEstateToDetailsFromList = new EventEmitter<RealEstate>();

  onItemToDetails(event: RealEstate) {
    this.realEstateToDetailsFromList.emit(event);
  }

  realEstates: RealEstate[];

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstates = this.realEstateService.getRealEstate();
  }
}
