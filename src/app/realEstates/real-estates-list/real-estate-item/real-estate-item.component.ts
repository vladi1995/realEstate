import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RealEstate } from '../../realEstate.model';

@Component({
  selector: 'app-real-estate-item',
  templateUrl: './real-estate-item.component.html',
  styleUrls: ['./real-estate-item.component.css']
})
export class RealEstateItemComponent {
  @Input() item: RealEstate;
  @Output() itemToDetails = new EventEmitter<RealEstate>();

  onSendToDetails() {
    this.itemToDetails.emit(this.item);
  }
}
