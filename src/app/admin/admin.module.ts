import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { AdminComponent } from "./admin.component";


const adminRoutes: Routes = [
    {
        path:'admin', component: AdminComponent,
        children:[ 
            // {path: 'manage-users', component: PremiumListingComponent},
            // {path:'history', component: HistoryComponent}
        ]
    },
]

@NgModule({
    declarations: [AdminComponent
],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule, 
        RouterModule.forChild(adminRoutes),
        SharedModule
        
    ],
    exports: [RouterModule],
    providers: []
})
export class AdminModule {

}