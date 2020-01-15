import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SignInComponent } from './../Login/user/sign-in/sign-in.component';
import { ToastrNotificationComponent } from './../toastr-notification.model/toastr-notification/toastr-notification.component';
import { ToastrNotificationService } from '../toastr-notification.model/toastr-notification.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    SignInComponent,
    ToastrNotificationComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ToastrNotificationService]
})
export class AdminModule { }
