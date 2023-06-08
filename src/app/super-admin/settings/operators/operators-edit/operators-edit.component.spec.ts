import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorsEditComponent } from './operators-edit.component';

describe('OperatorsEditComponent', () => {
  let component: OperatorsEditComponent;
  let fixture: ComponentFixture<OperatorsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
