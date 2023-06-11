import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedMailComponent } from './assigned-mail.component';

describe('AssignedMailComponent', () => {
  let component: AssignedMailComponent;
  let fixture: ComponentFixture<AssignedMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedMailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignedMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
