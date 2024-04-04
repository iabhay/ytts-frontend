import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { RouterModule } from "@angular/router";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { OpenerComponent } from "./openers/opener.component";

@NgModule({
    declarations: [ 
        LoadingSpinnerComponent,
        OpenerComponent,
        CardComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [LoadingSpinnerComponent, OpenerComponent, RouterModule, CardComponent]
})
export class SharedModule {

}