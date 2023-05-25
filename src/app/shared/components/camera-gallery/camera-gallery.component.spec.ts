import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CameraGalleryComponent} from './camera-gallery.component';

describe('CameraGalleryComponent', () => {
  let component: CameraGalleryComponent;
  let fixture: ComponentFixture<CameraGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraGalleryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
