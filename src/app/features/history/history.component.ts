import { Component } from '@angular/core';
import { FeatureService } from '../features.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  history: any;
  constructor(private featureService: FeatureService){
  }

  ngOnInit(){
    this.featureService.fetchHistory().subscribe(resHistory => {
      this.history = resHistory;
    })
  }
  customSort(event){

  }
}
