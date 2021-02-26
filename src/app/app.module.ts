import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigurationModule } from './configuration/configuration.module';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  // {path: 'home', component: UserHomeComponent},
  // {path: 'buyer', component: BuyerComponent},
  // {path: 'seller', component: SellerComponent},
  // {path: 'article', component: ArticleComponent},
  // {path: 'city-location', component: CityLocationComponent},
  // {path: 'country', component: CountryComponent},
  // {path: 'currency-rate', component: CurrencyRateComponent},
  // {path: 'foreignAgent', component: ForeignExternalAgentsComponent},
  // {path: 'generalsettings', component: GeneralSettingsComponent},
  // {path: 'notificationsettings', component: NotificationSettingsComponent},
  // {path: 'organization', component: OrganizationComponent},
  // {path: 'product', component: ProductComponent},
  // {path: 'textile', component: TextileGarmentsComponent},
  // {path: 'bankInfo', component: BankInfoComponent},
  // {path: '', redirectTo: '/home', pathMatch: 'full'}
  ]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,   
  ],


  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ConfigurationModule,
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
