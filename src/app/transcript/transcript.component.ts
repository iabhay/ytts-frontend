import { Component} from '@angular/core';
import { TranscriptService } from './transcript.service';

@Component({
  selector: 'app-transcript',
  templateUrl: './transcript.component.html',
  styleUrl: './transcript.component.css',
})
export class TranscriptComponent {
  showSpinner = false;
  summary;
  errorRes;

  constructor(private transcriptService: TranscriptService) {}

  onSubmit(youtube_input) {
    this.showSpinner = true;
    const youtube_url = youtube_input.value;
    // const pattern="(https:\/\/)?(www.)?youtube.(com)\/watch\?v=[a-zA-Z0-9\-\_]{11}";
    // if(!pattern.match(youtube_url)){
    //   this.errorRes = "Please Input Valid Youtube Url!";
    //   this.showSpinner = false;
    // }
    // else{
      this.transcriptService.fetchSummary(youtube_url).subscribe({
        next: (res) => {
          this.summary = res;
        },
        error: (err) => {
          this.errorRes = err;
          this.showSpinner = false;
        },
        complete: () => {
          this.showSpinner = false;
        }
      });
    // }
  }
}
