import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TypeOfHouse } from 'src/app/shared/typeOfHouses';
import { RealEstateService } from '../realEstate.service';
import { RealEstate } from '../realEstate.model';

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
  isOwner: boolean = false;

  constructor(private route: ActivatedRoute, private realEstateService: RealEstateService, private router: Router) {}

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
    const newRealEstate = new RealEstate(
      this.realEstateForm.value['name'],
      this.realEstateForm.value['description'],
      this.realEstateForm.value['imagePath'],
      this.realEstateForm.value['type'],
      this.realEstateForm.value['price'],
      this.realEstateForm.value['size'],
      this.realEstateForm.value['town'],
      JSON.parse(localStorage.getItem('userData')),
    );
    if (this.editMode) {
      this.realEstateService.updateRealEstate(this.id, newRealEstate);
    } else {
      this.realEstateService.addRealEstate(newRealEstate);
    }

    this.onCancel();
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

      const isOwner = JSON.parse(localStorage.getItem('userData')).email === realEstate.owner.email;
      if(!isOwner) {
        this.router.navigate(['./login']);
      }
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

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
