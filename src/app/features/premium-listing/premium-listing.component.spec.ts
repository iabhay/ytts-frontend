import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumListingComponent } from './premium-listing.component';

describe('PremiumListingComponent', () => {
  let component: PremiumListingComponent;
  let fixture: ComponentFixture<PremiumListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PremiumListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PremiumListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
