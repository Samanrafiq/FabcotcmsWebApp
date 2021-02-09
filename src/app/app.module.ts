import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BuyerComponent } from './configuration/sub-list/buyer/buyer.component';
import { SellerComponent } from './configuration/sub-list/seller/seller.component';

const appRoutes: Routes = [
  {path: 'home', component: UserHomeComponent},
  {path: 'buyer', component: BuyerComponent},
  {path: 'seller', component: SellerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
  ]



@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
    ConfigurationComponent,
    BuyerComponent,
    SellerComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
