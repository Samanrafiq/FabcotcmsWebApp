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
    EditBuyerComponent, ArticlesComponent,
  
  
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
