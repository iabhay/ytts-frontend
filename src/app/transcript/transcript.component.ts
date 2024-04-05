import { Component, ViewChild } from '@angular/core';
import { TranscriptService } from './transcript.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrl: './transcript.component.css'
})
export class TranscriptComponent {
  @ViewChild('transcript') url_inp;  

  summary;

  constructor(private transcriptService: TranscriptService){}

  onSubmit(){
    const youtube_url = this.url_inp.nativeElement.value;
    this.transcriptService.fetchSummary(youtube_url).subscribe(res=>{
      this.summary = res;
    })
  }
}
