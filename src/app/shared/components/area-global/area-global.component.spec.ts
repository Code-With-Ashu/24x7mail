import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AreaGlobalComponent} from './area-global.component';

describe('AreaGlobalComponent', () => {
  let component: AreaGlobalComponent;
  let fixture: ComponentFixture<AreaGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaGlobalComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AreaGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
