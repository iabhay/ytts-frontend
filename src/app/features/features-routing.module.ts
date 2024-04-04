import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";
import { SharedModule } from "../shared/shared.module";
import { PremiumListingComponent } from "./premium-listing/premium-listing.component";
import { HistoryComponent } from "./history/history.component";
import { TableModule } from "primeng/table";


const featureRoutes: Routes = [
    {
        path:'features', component: FeaturesComponent,
        children:[ 
            {path: 'premiumlist', component: PremiumListingComponent},
            {path:'history', component: HistoryComponent}
        ]
    },
]

@NgModule({
    declarations: [FeaturesComponent,
        PremiumListingComponent, HistoryComponent
    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        RouterModule.forChild(featureRoutes),
        SharedModule,
        TableModule
        
    ],
    exports: [RouterModule, TableModule],
    providers: []
})
export class FeatureModule {

}