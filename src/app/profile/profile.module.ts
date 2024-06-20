import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { loginGuard } from '../guards/login.guard';
import { OverlayModule } from 'primeng/overlay';

const profileRoutes: Routes = [
  {
    path: 'profile',
    canActivate: [loginGuard],
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    OverlayModule,
    RouterModule.forChild(profileRoutes),
  ],
  exports: [],
  providers: [],
})
export class ProfileModule {}
