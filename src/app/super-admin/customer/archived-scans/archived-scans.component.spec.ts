import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ArchivedScansComponent} from './archived-scans.component';

describe('ArchivedScansComponent', () => {
  let component: ArchivedScansComponent;
  let fixture: ComponentFixture<ArchivedScansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivedScansComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArchivedScansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
