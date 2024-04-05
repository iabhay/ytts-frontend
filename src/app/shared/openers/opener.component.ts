import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-opener',
    templateUrl: './opener.component.html',
    styleUrls: ['./opener.component.css']
})
export class OpenerComponent{
    @Input() title: string;
    @Input() description: string;
    @Input() actionText: string;
    @Input() routeTarget: string;
    @Output() close = new EventEmitter<void>();
    
    onClose(){
        this.close.emit();
    }
}