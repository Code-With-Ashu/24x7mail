import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UploadNewMailComponent} from './upload-new-mail.component';

describe('UploadNewMailComponent', () => {
  let component: UploadNewMailComponent;
  let fixture: ComponentFixture<UploadNewMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadNewMailComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UploadNewMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
