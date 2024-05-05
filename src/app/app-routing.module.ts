import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { TranscriptComponent } from './transcript/transcript.component';
import { loginGuard } from './guards/login.guard';
const appRoutes: Routes = [
  {
    path: '',
    canActivate: [loginGuard],
    component: TranscriptComponent,
    pathMatch: 'full',
  },
  { path: 'auth', component: AuthComponent },
  {
    path: 'features',
    loadChildren: () => import('./features/features-routing.module').then(mod => mod.FeatureModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
