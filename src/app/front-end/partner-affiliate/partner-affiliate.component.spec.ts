import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PartnerAffiliateComponent} from './partner-affiliate.component';

describe('PartnerAffiliateComponent', () => {
  let component: PartnerAffiliateComponent;
  let fixture: ComponentFixture<PartnerAffiliateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartnerAffiliateComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PartnerAffiliateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
