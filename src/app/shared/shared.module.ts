import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { OpenerComponent } from "./openers/opener.component";
import { OverlayComponent } from "./overlay/overlay.component";
import { DialogModule } from "primeng/dialog"; 
import { ButtonModule } from "primeng/button"; 

@NgModule({
    declarations: [ 
        LoadingSpinnerComponent,
        OpenerComponent,
        CardComponent,
        OverlayComponent
    ],
    imports: [
        RouterModule,
        DialogModule,
        ButtonModule
    ],
    exports: [LoadingSpinnerComponent, OpenerComponent, RouterModule, CardComponent]
})
export class SharedModule {

}