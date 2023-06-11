import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtoastComponent } from './ngtoast.component';

describe('NgtoastComponent', () => {
  let component: NgtoastComponent;
  let fixture: ComponentFixture<NgtoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtoastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgtoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
