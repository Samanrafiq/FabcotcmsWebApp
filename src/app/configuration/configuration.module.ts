import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigurationComponent } from './configuration.component';
import { SellerComponent } from './seller/seller.component';
import { EditSellerFormComponent } from './seller/edit-seller-form/edit-seller-form.component';
import { AddSellerFormComponent } from './seller/add-seller-form/add-seller-form.component';
import { ForeignAgentComponent } from './foreign-agent/foreign-agent.component';
import { AddAgentFormComponent } from './foreign-agent/add-agent-form/add-agent-form.component';
import { EditAgentFormComponent } from './foreign-agent/edit-agent-form/edit-agent-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';
import { BuyerComponent } from './buyer/buyer.component';
import { AddBuyerComponent } from './buyer/add-buyer/add-buyer.component';
import { EditBuyerComponent } from './buyer/edit-buyer/edit-buyer.component';
import { ArticlesComponent } from './articles/articles.component';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { EditArticleComponent } from './articles/edit-article/edit-article.component';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { AddCityComponent } from './city/add-city/add-city.component';
import { EditCityComponent } from './city/edit-city/edit-city.component';
import { EditCountryComponent } from './country/edit-country/edit-country.component';
import { AddCountryComponent } from './country/add-country/add-country.component';
import { FabricTypeComponent } from './product/fabric-type/fabric-type.component';
import { PackingComponent } from './product/packing/packing.component';
import { PaymentTermComponent } from './product/payment-term/payment-term.component';
import { AddTypeComponent } from './product/fabric-type/add-type/add-type.component';
import { EditTypeComponent } from './product/fabric-type/edit-type/edit-type.component';
import { EditPackingComponent } from './product/packing/edit-packing/edit-packing.component';
import { AddPackingComponent } from './product/packing/add-packing/add-packing.component';
import { AddPaymentComponent } from './product/payment-term/add-payment/add-payment.component';
import { EditPaymentComponent } from './product/payment-term/edit-payment/edit-payment.component';
import { PriceTermComponent } from './product/price-term/price-term.component';
import { AddPriceComponent } from './product/price-term/add-price/add-price.component';
import { EditPriceComponent } from './product/price-term/edit-price/edit-price.component';
import { BankComponent } from './bank-info/bank/bank.component';
import { BankAccountsComponent } from './bank-info/bank-accounts/bank-accounts.component';
import { AddBankComponent } from './bank-info/bank/add-bank/add-bank.component';
import { EditBankComponent } from './bank-info/bank/edit-bank/edit-bank.component';

@NgModule({
  declarations: [
    ConfigurationComponent, 
    SellerComponent, 
    EditSellerFormComponent, 
    AddSellerFormComponent, 
    ForeignAgentComponent, 
    AddAgentFormComponent, 
    EditAgentFormComponent, 
    BuyerComponent, 
    AddBuyerComponent, 
    EditBuyerComponent, ArticlesComponent, AddArticleComponent, EditArticleComponent, CityComponent, CountryComponent, CurrencyComponent, AddCityComponent, EditCityComponent, EditCountryComponent, AddCountryComponent, FabricTypeComponent, PackingComponent, PaymentTermComponent, AddTypeComponent, EditTypeComponent, EditPackingComponent, AddPackingComponent, AddPaymentComponent, EditPaymentComponent, PriceTermComponent, AddPriceComponent, EditPriceComponent, BankComponent, BankAccountsComponent, AddBankComponent, EditBankComponent, 
  
  
  ],
 
  
  
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true,
      timeOut:3000
    }),
  ]
})
export class ConfigurationModule { }
