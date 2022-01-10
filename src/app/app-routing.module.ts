import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingDetailsComponent } from './components/advertising-details/advertising-details.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminHomeComponent } from './components2/admin-home/admin-home.component';
import { AdminLayoutComponent } from './components2/admin-layout/admin-layout.component';
import { AdvertiseComponent } from './components2/advertise/advertise.component';
import { AuthGuard } from './components2/auth.guard';
import { LoginComponent } from './components2/login/login.component';
import { MyAdvertisementComponent } from './components2/my-advertisement/my-advertisement.component';
import { SignupComponent } from './components2/signup/signup.component';


const routes: Routes = [
  {path: "", component: LayoutComponent, children: [
    {path: '', component: HomeComponent},{path: "advertisingDetails/:id", component: AdvertisingDetailsComponent}
  ]
  },

  
  {path:"login", component:LoginComponent}, 
  {path:"signup", component:SignupComponent},


  {path: 'admin', component: AdminLayoutComponent, canActivateChild: [AuthGuard], children: [
    {path: '', component: AdminHomeComponent},
    {path: 'advertise', component: AdvertiseComponent},{path: 'myadvertisement', component: MyAdvertisementComponent}
    
  ]},

  
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
