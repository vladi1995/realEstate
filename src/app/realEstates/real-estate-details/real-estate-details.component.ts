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
  isOwner: boolean = false;

  constructor(private realEstateService: RealEstateService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.realEstateToDetailsFromApp = this.realEstateService.getCurrentRealEstate(this.id); 
        console.log(JSON.parse(localStorage.getItem('userData')));
        console.log(( this.realEstateToDetailsFromApp.owner['_token']));
        
        
        this.isOwner = JSON.parse(localStorage.getItem('userData')).email === this.realEstateToDetailsFromApp.owner.email;
      }
    )
  }

  onEditRealEstate() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRealEstate() {
    this.realEstateService.deleteRealEstate(this.id);
    this.router.navigate(['/realEstateList']);
  }
}
