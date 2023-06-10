import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastShipmentComponent } from './past-shipment.component';

describe('PastShipmentComponent', () => {
  let component: PastShipmentComponent;
  let fixture: ComponentFixture<PastShipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastShipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastShipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
