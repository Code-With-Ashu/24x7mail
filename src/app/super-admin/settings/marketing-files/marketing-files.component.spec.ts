import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MarketingFile} from './marketing-files.component';

describe('MarketingFile', () => {
  let component: MarketingFile;
  let fixture: ComponentFixture<MarketingFile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MarketingFile]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MarketingFile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
