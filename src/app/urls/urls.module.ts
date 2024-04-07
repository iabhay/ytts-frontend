import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { SharedModule } from '../shared/shared.module';
import { loginGuard } from '../guards/login.guard';
import { DialogModule } from 'primeng/dialog';
import { adminGuard } from '../guards/admin.guard';
import { UrlsComponent } from './urls.component';
import { UrlComponent } from './url-component/url-component.component';
import { OverlayModule } from 'primeng/overlay';
import { ButtonModule } from 'primeng/button';

const urlRoutes: Routes = [
  {
    path: 'admin/manage-urls',
    canActivate: [loginGuard, adminGuard],
    component: UrlsComponent,
  },
];

@NgModule({
  declarations: [UrlsComponent, UrlComponent],
  providers: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(urlRoutes),
    SharedModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    ButtonModule,
    OverlayModule
  ],
  exports: [RouterModule, UrlComponent, TableModule, DialogModule],
})
export class UrlsModule {}
