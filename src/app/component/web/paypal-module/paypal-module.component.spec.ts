import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalModuleComponent } from './paypal-module.component';

describe('PaypalModuleComponent', () => {
  let component: PaypalModuleComponent;
  let fixture: ComponentFixture<PaypalModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaypalModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
