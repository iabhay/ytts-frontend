import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-summary-output',
    templateUrl: './summary-output.component.html',
    styleUrls: ['./summary-output.component.css']
})
export class SummaryOutputComponent {
    @Input() summary;
    @Input() transcript;
}