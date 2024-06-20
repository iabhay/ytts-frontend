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
    this.transcriptService.fetchSummary(youtube_url).subscribe({
      next: (res) => {
        console.log(res);
        this.summary = res;
      },
      error: (err) => {
        console.log(err);
        this.errorRes = err;
        this.showSpinner = false;
      },
      complete: () => {
        this.showSpinner = false;
      }
    });
  }
}
