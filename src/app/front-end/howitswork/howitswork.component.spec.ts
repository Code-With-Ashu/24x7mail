import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HowitsworkComponent} from './howitswork.component';

describe('HowitsworkComponent', () => {
  let component: HowitsworkComponent;
  let fixture: ComponentFixture<HowitsworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HowitsworkComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HowitsworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
