import { Component, OnInit, OnDestroy } from '@angular/core';
import { RealEstate } from '../realEstate.model';
import { RealEstateService } from '../realEstate.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-real-estates-list',
  templateUrl: './real-estates-list.component.html',
  styleUrls: ['./real-estates-list.component.css'],
  providers: [],
})
export class RealEstatesListComponent implements OnInit, OnDestroy {
  realEstates: RealEstate[];
  subscription: Subscription;
  currentPage: number = 1;
  realEstateModifiedList: any[] = [];
  
  constructor(private realEstateService: RealEstateService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.subscription = this.realEstateService.realEstateChanged.subscribe(
      (realEstate: RealEstate[]) => {
        this.realEstates = realEstate;
      }
      )
      this.realEstates = this.realEstateService.getRealEstate();
      this.realEstateModifiedList = this.realEstates.slice(0, 5);
  }

  onNewRealEstate() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  changePage(page: number):void {
    this.currentPage = page;
    const pageIndex = (this.currentPage - 1) * 5;
    this.realEstateModifiedList = this.realEstates.slice(pageIndex, pageIndex + 5);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
