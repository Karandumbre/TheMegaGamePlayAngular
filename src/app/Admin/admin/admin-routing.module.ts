import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './../Login/user/sign-in/sign-in.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

const Routes: Routes = [{
    path: '',
    component: SignInComponent
}, { path: 'dashboard', component: DashboardComponent }];

@NgModule({
    imports: [RouterModule.forChild(Routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
