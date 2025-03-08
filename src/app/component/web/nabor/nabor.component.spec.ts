import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaborComponent } from './nabor.component';

describe('NaborComponent', () => {
  let component: NaborComponent;
  let fixture: ComponentFixture<NaborComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaborComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
