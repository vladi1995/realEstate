import { Component, OnInit } from '@angular/core';
import { RealEstate } from '../realEstate.model';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { RealEstateService } from '../realEstate.service';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-real-estate-details',
  templateUrl: './real-estate-details.component.html',
  styleUrls: ['./real-estate-details.component.css']
})
export class RealEstateDetailsComponent implements OnInit {
  commentsForm: FormGroup;
  realEstateToDetailsFromApp: RealEstate;
  id: number;
  isOwner: boolean = false;
  currentUser: User;
  updatedRealEstate: RealEstate;

  constructor(private realEstateService: RealEstateService, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    let comment = '';

    this.commentsForm = new FormGroup({
      'comment': new FormControl(comment, [Validators.required, Validators.minLength(3)]),
    });

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.realEstateToDetailsFromApp = this.realEstateService.getCurrentRealEstate(this.id);
        this.isOwner = JSON.parse(localStorage.getItem('userData')).email === this.realEstateToDetailsFromApp.owner.email;
      }
    )
  }

  onEditRealEstate() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRealEstate() {
    const confirmation = confirm("Are you sure you want to delete?");
    if (confirmation) {
      this.realEstateService.deleteRealEstate(this.id);
      this.router.navigate(['/realEstateList']);
    }
  }

  onSubmit() {
    this.authService.user.subscribe(user => {
      this.currentUser = user;
    });

    let newElement = { comment: this.commentsForm.value['comment'], userAdded: this.currentUser.email };
    let newArray = this.realEstateToDetailsFromApp.comments.concat(newElement);
    
    this.realEstateToDetailsFromApp = {
      ...this.realEstateToDetailsFromApp,
      comments: newArray,
    }
  
    this.realEstateService.updateRealEstate(this.id, this.realEstateToDetailsFromApp);
    this.commentsForm.reset();
  }
}
