import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VedioTutorials} from './vedio-tutorials.component';

describe('VedioTutorials', () => {
  let component: VedioTutorials;
  let fixture: ComponentFixture<VedioTutorials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VedioTutorials]
    })
      .compileComponents();

    fixture = TestBed.createComponent(VedioTutorials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
