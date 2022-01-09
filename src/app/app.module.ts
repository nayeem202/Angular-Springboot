import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { LoginComponent } from './components2/login/login.component';
import { SignupComponent } from './components2/signup/signup.component';
import { AdminLayoutComponent } from './components2/admin-layout/admin-layout.component';
import { AdHeaderComponent } from './components2/admin-layout/ad-header/ad-header.component';
import { AdFooterComponent } from './components2/admin-layout/ad-footer/ad-footer.component';
import { AdminHomeComponent } from './components2/admin-home/admin-home.component';
import { DashboardComponent } from './components2/admin-layout/admin/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AdvertiseComponent } from './components2/advertise/advertise.component';
import { MyAdvertisementComponent } from './components2/my-advertisement/my-advertisement.component';
import { AdvertisingDetailsComponent } from './components/advertising-details/advertising-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminLayoutComponent,
    AdHeaderComponent,
    AdFooterComponent,
    AdminHomeComponent,
    DashboardComponent,
    AdvertiseComponent,
    MyAdvertisementComponent,
    AdvertisingDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
