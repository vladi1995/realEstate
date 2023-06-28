import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../realEstate.model';
import { RealEstateService } from '../realEstate.service';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.css'],
  providers: [],
})
export class RealEstatesListComponent implements OnInit {
  realEstates: RealEstate[];

  constructor(private realEstateService: RealEstateService) {}

  ngOnInit(): void {
    this.realEstates = this.realEstateService.getRealEstate();
  }
}
