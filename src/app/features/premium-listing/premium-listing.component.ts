import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TableModule } from 'primeng/table';
import { FeatureService } from '../features.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-premium-listing',
  templateUrl: './premium-listing.component.html',
  styleUrl: './premium-listing.component.css',
})
export class PremiumListingComponent implements OnInit, OnDestroy {
  premiumlists;
  @Input() user_id: String;
  premiumListingSub: Subscription;
  errorMessage: String;
  overlayVisible: boolean = false;

  constructor(private featureService: FeatureService, private messageService: MessageService) {}

  ngOnInit() {
    if (!this.user_id) {
      this.premiumListingSub = this.featureService
        .fetchPremiumListings()
        .subscribe({
          next: (resProducts) => {
            this.premiumlists = resProducts;
          },
          error: (err) => {
            this.errorMessage = err;
          },
        });
    } else if (this.user_id) {
      this.premiumListingSub = this.featureService
        .fetchPremiumListingsByAdmin(this.user_id)
        .subscribe({
          next: (resProducts) => {
            this.premiumlists = resProducts;
          },
          error: (err) => {
            this.errorMessage = err;
          },
        });
    }
  }
  
  toggle() {
    this.overlayVisible = !this.overlayVisible;
  } 

  addPremiumlist(form: NgForm){
    if(form.valid){
      const yt_url = form.value.inp_url;
      if(!this.user_id){
        this.featureService.premiumListingRequest(yt_url).subscribe({
          next: res => {
            this.messageService.add({
              severity: 'success',
              summary: 'Added!',
              detail: res.message
            });
          },
          error: err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Unsuccessfull!',
              detail: err.message
            });
          }
      })
      }
      else if(this.user_id){
        this.featureService.addPremiumListing(this.user_id, yt_url).subscribe({
          next: res => {
            this.messageService.add({
              severity: 'success',
              summary: 'Added!',
              detail: res.message
            });
          },
          error: err => {
            this.messageService.add({
              severity: 'error',
              summary: 'Unsuccessfull!',
              detail: err.message
            })
          }
        });
      }
    }

  }

  ngOnDestroy(): void {
    this.premiumListingSub.unsubscribe();
  }
}
