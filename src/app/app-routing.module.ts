import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TranscriptComponent } from "./transcript/transcript.component";
import { ProfileComponent } from "./profile/profile.component";
import { FeaturesComponent } from "./features/features.component";
import { HistoryComponent } from "./features/history/history.component";
import { PremiumListingComponent } from "./features/premium-listing/premium-listing.component";
import { RoleComponent } from "./profile/role-change/role.component";
const appRoutes: Routes = [
    {path: '', component: TranscriptComponent, pathMatch: 'full'},
    {path: 'auth', component:AuthComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}