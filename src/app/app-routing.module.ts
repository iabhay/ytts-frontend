import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TranscriptComponent } from "./transcript/transcript.component";
import { LogoutComponent } from "./auth/logout/logout.component";
import { loginGuard } from "./guards/login.guard";
const appRoutes: Routes = [
    {path: '',canActivate:[loginGuard], component: TranscriptComponent, pathMatch: 'full'},
    {path: 'auth', component:AuthComponent},
    {path: 'logout',canActivate:[loginGuard], component: LogoutComponent}
    
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}