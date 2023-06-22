import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  @Output() chosenCategory = new EventEmitter<string>();

  onChooseCategory(chosenCategory: string) {
    this.chosenCategory.emit(chosenCategory);
  }
}
