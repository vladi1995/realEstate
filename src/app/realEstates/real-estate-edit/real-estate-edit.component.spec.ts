import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateEditComponent } from './real-estate-edit.component';

describe('RealEstateEditComponent', () => {
  let component: RealEstateEditComponent;
  let fixture: ComponentFixture<RealEstateEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateEditComponent]
    });
    fixture = TestBed.createComponent(RealEstateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
