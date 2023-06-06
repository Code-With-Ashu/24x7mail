import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MailBoxSetting} from './mailbox-setting.component';

describe('AssignMailComponent', () => {
  let component: MailBoxSetting;
  let fixture: ComponentFixture<MailBoxSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MailBoxSetting]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MailBoxSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
