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
import { ButtonModule } from 'primeng/button';
import { FeatureModule } from './features/features-routing.module';
import { SharedModule } from './shared/shared.module';
import { TableModule } from 'primeng/table';
import { ProfileModule } from './profile/profile.module';
import { ToastModule } from 'primeng/toast';
import { MessageService, PrimeIcons } from 'primeng/api';
import { ProfileInterceptor } from './profile/profile-interceptor.service';
import { AdminModule } from './admin/admin.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScrollPanelModule } from 'primeng/scrollpanel'; 
import { SummaryOutputComponent } from './transcript/summary-output/summary-output.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TranscriptComponent,
    AuthComponent,
    SummaryOutputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    FeatureModule,
    SharedModule,
    TableModule,
    ProfileModule,
    ToastModule,
    AdminModule,
    ScrollPanelModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ProfileInterceptor, multi: true },
    MessageService,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
