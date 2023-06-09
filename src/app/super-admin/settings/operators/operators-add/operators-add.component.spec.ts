import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertaorsAdd } from './operators-add.component'

describe('OpertaorsList', () => {
  let component: OpertaorsAdd;
  let fixture: ComponentFixture<OpertaorsAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertaorsAdd ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertaorsAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
