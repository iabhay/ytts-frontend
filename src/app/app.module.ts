import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TranscriptComponent } from './transcript/transcript.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoryComponent } from './features/history/history.component';
import { PremiumListingComponent } from './features/premium-listing/premium-listing.component';
import {ButtonModule} from 'primeng/button';
import { FeatureModule } from './features/features-routing.module';
import { SharedModule } from './shared/shared.module';
import { TableModule } from 'primeng/table';
import { RoleComponent } from './profile/role-change/role.component';
import { ProfileModule } from './profile/profile.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ProfileInterceptor } from './profile/profile-interceptor.service';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { MessagesModule } from './messages/messages.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TranscriptComponent,
    AuthComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule, 
    FeatureModule,
    SharedModule,
    TableModule,
    ProfileModule,
    ToastModule,
    AdminModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: ProfileInterceptor, multi: true}, MessageService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
