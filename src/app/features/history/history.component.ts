import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FeatureService } from '../features.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit, OnDestroy {
  history: any;
  historySub: Subscription;
  errorMessage: String;

  @Input() user_id: String;
  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    if (!this.user_id) {
      this.historySub = this.featureService.fetchHistory().subscribe({
        next: (resHistory) => {
          this.history = resHistory;
        },
        error: (err) => {
          this.errorMessage = err;
        },
      });
    } else if (this.user_id) {
      this.historySub = this.featureService
        .fetchHistoryByAdmin(this.user_id)
        .subscribe({
          next: (resHistory) => {
            this.history = resHistory;
          },
          error: (err) => {
            this.errorMessage = err;
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.historySub.unsubscribe();
  }
}
