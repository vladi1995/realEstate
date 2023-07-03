import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { TypeOfHouse } from 'src/app/shared/typeOfHouses';
import { RealEstateService } from '../realEstate.service';

@Component({
  selector: 'app-real-estate-edit',
  templateUrl: './real-estate-edit.component.html',
  styleUrls: ['./real-estate-edit.component.css']
})
export class RealEstateEditComponent implements OnInit {
  id: number;
  editMode = false;
  typeOfHouse: string[] = Object.values(TypeOfHouse);
  realEstateForm: FormGroup;

  constructor(private route: ActivatedRoute, private realEstateService: RealEstateService) {}

  ngOnInit(): void {    
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !== undefined;
        this.initForm();
      }
    )
  }

  onSubmit() {

  }

  private initForm() {
    let realEstateName = '';
    let realEstateImagePath = '';
    let realEstateDescription = '';
    let realEstateType = '';
    let realEstateTown = '';
    let realEstatePrice = 0;
    let realEstateSize = 0;

    if (this.editMode) {
      const realEstate = this.realEstateService.getCurrentRealEstate(this.id);

      realEstateName = realEstate.name;
      realEstateImagePath = realEstate.imagePath;
      realEstateDescription = realEstate.description;
      realEstateType = realEstate.type;
      realEstateTown = realEstate.town;
      realEstatePrice = realEstate.price;
      realEstateSize = realEstate.quadratMeter;
    }

    this.realEstateForm = new FormGroup({
      'name': new FormControl(realEstateName, [Validators.required, Validators.minLength(5)]),
      'imagePath': new FormControl(realEstateImagePath, [Validators.required, Validators.minLength(5)]),
      'description': new FormControl(realEstateDescription, [Validators.required, Validators.minLength(5)]),
      'type': new FormControl(realEstateType, Validators.required),
      'town': new FormControl(realEstateTown, Validators.required),
      'size': new FormControl(realEstateSize, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'price': new FormControl(realEstatePrice, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
    });
  }
}
