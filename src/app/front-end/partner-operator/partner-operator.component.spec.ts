import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PartnerOperatorComponent} from './partner-operator.component';

describe('PartnerOperatorComponent', () => {
  let component: PartnerOperatorComponent;
  let fixture: ComponentFixture<PartnerOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerOperatorComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PartnerOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
