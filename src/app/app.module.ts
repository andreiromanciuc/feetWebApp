import { UserPageComponent } from './user-page/user-page.component';
import { ContractPageComponent } from './contract-page/contract-page.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { FleetPageComponent } from './fleet-page/fleet-page.component';
import { FormsModule } from "@angular/forms";

const appRoutes :Routes = [
  {
    path: '',
    component: FleetPageComponent
  },
  {
    path: 'partner',
    component: PartnerPageComponent
  },
  {
    path: 'customer',
    component: CustomerPageComponent
  },  
  {
    path: 'contract',
    component: ContractPageComponent
  },
  {
    path: 'user',
    component :UserPageComponent
  },
  {
    path: 'fleet',
    component: FleetPageComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginPageComponent,
    PartnerPageComponent,
    CustomerPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
