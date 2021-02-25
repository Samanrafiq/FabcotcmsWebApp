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
import { ArticleComponent } from './configuration/sub-list/article/article.component';
import { CityLocationComponent } from './configuration/sub-list/city-location/city-location.component';
import { CountryComponent } from './configuration/sub-list/country/country.component';
import { CurrencyRateComponent } from './configuration/sub-list/currency-rate/currency-rate.component';
import { ForeignExternalAgentsComponent } from './configuration/sub-list/foreign-external-agents/foreign-external-agents.component';
import { GeneralSettingsComponent } from './configuration/sub-list/general-settings/general-settings.component';
import { NotificationSettingsComponent } from './configuration/sub-list/notification-settings/notification-settings.component';
import { OrganizationComponent } from './configuration/sub-list/organization/organization.component';
import { BankInfoComponent } from './configuration/sub-list/bank-info/bank-info.component';
import { ProductComponent } from './configuration/sub-list/product/product.component';
import { TextileGarmentsComponent } from './configuration/sub-list/textile-garments/textile-garments.component';


const appRoutes: Routes = [
  {path: 'home', component: UserHomeComponent},
  {path: 'buyer', component: BuyerComponent},
  {path: 'seller', component: SellerComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'city-location', component: CityLocationComponent},
  {path: 'country', component: CountryComponent},
  {path: 'currency-rate', component: CurrencyRateComponent},
  {path: 'foreignAgent', component: ForeignExternalAgentsComponent},
  {path: 'generalsettings', component: GeneralSettingsComponent},
  {path: 'notificationsettings', component: NotificationSettingsComponent},
  {path: 'organization', component: OrganizationComponent},
  {path: 'product', component: ProductComponent},
  {path: 'textile', component: TextileGarmentsComponent},
  {path: 'bankInfo', component: BankInfoComponent},
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
    BankInfoComponent,
    ProductComponent,
    TextileGarmentsComponent,
   
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
