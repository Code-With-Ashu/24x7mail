import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccount } from './edit-account.component';

describe('OperatorsEditComponent', () => {
  let component: EditAccount;
  let fixture: ComponentFixture<EditAccount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccount ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAccount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
