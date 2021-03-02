import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { BankAccountsComponent } from './bank-info/bank-accounts/bank-accounts.component';
import { BankComponent } from './bank-info/bank/bank.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CityComponent } from './city/city.component';
import { CountryComponent } from './country/country.component';
import { CurrencyComponent } from './currency/currency.component';
import { ForeignAgentComponent } from './foreign-agent/foreign-agent.component';
import { FabricTypeComponent } from './product/fabric-type/fabric-type.component';
import { PackingComponent } from './product/packing/packing.component';
import { PaymentTermComponent } from './product/payment-term/payment-term.component';
import { PriceTermComponent } from './product/price-term/price-term.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [


      {path: 'buyer', component: BuyerComponent},
      {path: 'seller', component: SellerComponent},
      {path: 'agent', component: ForeignAgentComponent},
      {path: 'article', component: ArticlesComponent},
      {path: 'fabric-type', component: FabricTypeComponent},
      {path: 'packing', component: PackingComponent},
      {path: 'price-term', component: PriceTermComponent},
      {path: 'payment-term', component: PaymentTermComponent},
      {path: 'bank', component: BankComponent},
      {path: 'bank-accounts', component: BankAccountsComponent},
      {path: 'city', component: CityComponent},
      {path: 'country', component: CountryComponent},
      {path: 'currency', component: CurrencyComponent},
      
    
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
