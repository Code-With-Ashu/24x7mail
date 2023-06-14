import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMailboxComponent } from './customer-mailbox.component';

describe('CustomerMailboxComponent', () => {
  let component: CustomerMailboxComponent;
  let fixture: ComponentFixture<CustomerMailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMailboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
