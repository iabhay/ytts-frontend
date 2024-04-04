import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { FeatureService } from '../features.service';

@Component({
  selector: 'app-premium-listing',
  templateUrl: './premium-listing.component.html',
  styleUrl: './premium-listing.component.css'
})
export class PremiumListingComponent implements OnInit{
  premiumlists;

  constructor(private featureService: FeatureService){}

  ngOnInit(){
    this.featureService.fetchPremiumListings().subscribe(resProducts => {
      this.premiumlists = resProducts;
    })
  }
  customSort(event){

  }
}
