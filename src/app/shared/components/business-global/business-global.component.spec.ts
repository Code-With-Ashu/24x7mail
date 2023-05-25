import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BusinessGlobalComponent} from './business-global.component';

describe('BusinessGlobalComponent', () => {
  let component: BusinessGlobalComponent;
  let fixture: ComponentFixture<BusinessGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessGlobalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BusinessGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
