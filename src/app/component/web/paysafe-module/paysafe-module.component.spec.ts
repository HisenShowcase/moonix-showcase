import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysafeModuleComponent } from './paysafe-module.component';

describe('PaysafeModuleComponent', () => {
  let component: PaysafeModuleComponent;
  let fixture: ComponentFixture<PaysafeModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaysafeModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaysafeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
