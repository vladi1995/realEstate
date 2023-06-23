import { Component, Input } from '@angular/core';
import { RealEstate } from '../../realEstate.model';
import { RealEstateService } from '../../realEstate.service';

@Component({
  selector: 'app-real-estate-item',
  templateUrl: './real-estate-item.component.html',
  styleUrls: ['./real-estate-item.component.css']
})
export class RealEstateItemComponent {
  @Input() item: RealEstate;

  constructor(private realEstateService: RealEstateService) {}

  onSendToDetails() {
    this.realEstateService.realEstateSelected.emit(this.item);
  }
}
