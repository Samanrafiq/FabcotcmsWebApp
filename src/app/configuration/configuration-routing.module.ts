import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ForeignAgentComponent } from './foreign-agent/foreign-agent.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [

      {path: 'article', component: ArticlesComponent},
      {path: 'agent', component: ForeignAgentComponent},
      {path: 'buyer', component: BuyerComponent},
      {path: 'seller', component: SellerComponent}
    
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
