import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlanRegistrationComponent} from './plan-registration.component';

describe('PlanRegistrationComponent', () => {
  let component: PlanRegistrationComponent;
  let fixture: ComponentFixture<PlanRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanRegistrationComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlanRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
