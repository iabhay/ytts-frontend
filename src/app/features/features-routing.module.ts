import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { SharedModule } from '../shared/shared.module';
import { PremiumListingComponent } from './premium-listing/premium-listing.component';
import { HistoryComponent } from './history/history.component';
import { TableModule } from 'primeng/table';
import { loginGuard } from '../guards/login.guard';
import { ButtonModule } from 'primeng/button';
import { OverlayModule } from 'primeng/overlay';

const featureRoutes: Routes = [
  {
    path: 'features',
    canActivate: [loginGuard],
    component: FeaturesComponent,
    children: [
      { path: 'premiumlist', component: PremiumListingComponent },
      { path: 'history', component: HistoryComponent },
    ],
  },
];

@NgModule({
  declarations: [FeaturesComponent, PremiumListingComponent, HistoryComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(featureRoutes),
    SharedModule,
    TableModule,
    ButtonModule,
    OverlayModule
  ],
  exports: [
    RouterModule,
    TableModule,
    PremiumListingComponent,
    HistoryComponent,
    FeaturesComponent,
    SharedModule
  ],
  providers: [],
})
export class FeatureModule {}
