import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdvancedSetting} from './advanced-setting.component';

describe('AdvancedSetting', () => {
  let component: AdvancedSetting;
  let fixture: ComponentFixture<AdvancedSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdvancedSetting]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdvancedSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
