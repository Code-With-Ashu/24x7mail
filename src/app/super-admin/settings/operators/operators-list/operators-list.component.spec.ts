import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertaorsList } from './operators-list.component';

describe('OpertaorsList', () => {
  let component: OpertaorsList;
  let fixture: ComponentFixture<OpertaorsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertaorsList ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertaorsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
