import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../realEstate.model';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { RealEstateService } from '../realEstate.service';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.css']
})
export class RealEstateDetailsComponent implements OnInit {
  realEstateToDetailsFromApp: RealEstate;
  id: number;

  constructor(private realEstateService: RealEstateService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.realEstateToDetailsFromApp = this.realEstateService.getCurrentRealEstate(this.id);  
      }
    )
  }

  onEditRealEstate() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
