import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-real-estate-edit',
  templateUrl: './real-estate-edit.component.html',
  styleUrls: ['./real-estate-edit.component.css']
})
export class RealEstateEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] !== null;
      }
    )
  }
}
