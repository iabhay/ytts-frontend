import { NgModule } from "@angular/core";
import { BannedUserComponent } from "./banned-user.component";
import { SharedModule } from "primeng/api";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [BannedUserComponent],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: '/banned', component: BannedUserComponent}
        ])
    ],
    exports: [RouterModule],
    providers: []
})
export class BannedUserModule{

}