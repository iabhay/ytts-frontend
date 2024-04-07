import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { loginGuard } from '../guards/login.guard';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FeatureModule } from '../features/features-routing.module';
import { adminGuard } from '../guards/admin.guard';
import { UserDetailComponent } from './user_detail/user-detail.component';

const userRoutes: Routes = [
  {
    path: 'admin/manage-users',
    canActivate: [loginGuard],
    component: UsersComponent,
  },
  {
    path: 'admin/manage-users/user-detail/:id',
    canActivate: [loginGuard, adminGuard],
    component: UserDetailComponent,
  },
];

@NgModule({
  declarations: [UsersComponent, UserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeatureModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    RouterModule.forChild(userRoutes),
  ],
  exports: [
    RouterModule,
    UserComponent,
    UserDetailComponent,
    TableModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    DropdownModule,
    FeatureModule,
  ],
  providers: [ConfirmationService],
})
export class UsersModule {}
