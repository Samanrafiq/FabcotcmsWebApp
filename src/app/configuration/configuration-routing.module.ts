import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerComponent } from './buyer/buyer.component';
import { ForeignAgentComponent } from './foreign-agent/foreign-agent.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
      {path: 'buyer', component: BuyerComponent},
      {path: 'seller', component: SellerComponent},
      {path: 'agent', component: ForeignAgentComponent},
      
      
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
