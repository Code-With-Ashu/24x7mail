import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OutgoingMailComponent} from './outgoing-mail.component';

describe('OutgoingMailComponent', () => {
  let component: OutgoingMailComponent;
  let fixture: ComponentFixture<OutgoingMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutgoingMailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OutgoingMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
