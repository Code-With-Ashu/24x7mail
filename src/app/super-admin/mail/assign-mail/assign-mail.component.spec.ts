import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AssignMailComponent} from './assign-mail.component';

describe('AssignMailComponent', () => {
  let component: AssignMailComponent;
  let fixture: ComponentFixture<AssignMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignMailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssignMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
