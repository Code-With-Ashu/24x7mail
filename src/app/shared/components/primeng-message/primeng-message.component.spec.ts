import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengMessageComponent } from './primeng-message.component';

describe('PrimengMessageComponent', () => {
  let component: PrimengMessageComponent;
  let fixture: ComponentFixture<PrimengMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimengMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimengMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
