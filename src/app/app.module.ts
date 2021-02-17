import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserHomeComponent } from './user-home/user-home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { BuyerComponent } from './configuration/sub-list/buyer/buyer.component';
import { SellerComponent } from './configuration/sub-list/seller/seller.component';
import { HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';

import { EditBuyerComponent } from './configuration/sub-list/buyer/edit-buyer/edit-buyer.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditSellerComponent } from './configuration/sub-list/seller/edit-seller/edit-seller.component';


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
    EditBuyerComponent,
    EditSellerComponent,
  ],


  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot({
      progressBar: true,
      timeOut:3000
    }),
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
