import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SearchBarService } from './searchBar.service';
import { RealEstateInterface } from './realEstate.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  searchValue: string = '';
  filteredRealEstates: RealEstateInterface[] = [];
  allRealEstates: RealEstateInterface[] = [];
  clickedSearch: boolean = false;

  searchForm = this.fb.nonNullable.group({
    searchValue: '',
  });

  ngOnInit(): void {
    this.clickedSearch = false;
    this.filteredRealEstates = [];
    this.allRealEstates = [];
    this.searchValue = '';
  }

  constructor(private searchBarService: SearchBarService, private fb: FormBuilder) {}

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue;
    this.fetchData();
    this.clickedSearch = true;
  }

  fetchData(): void {
    this.searchBarService.getRealEstates().subscribe(realEstates => {
      this.allRealEstates = Object.values(realEstates);
      this.filteredRealEstates = Object.values(realEstates).filter(x => x.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    });
  }
}
