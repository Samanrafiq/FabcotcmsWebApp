import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
    response: any;
    states: any;
    data:any={};
    country:any=[];
    countryId:null;
  constructor(private http:HttpClient,
              private toastr: ToastrService) { }

             
              
  ngOnInit(){
    this.getCountry();
  }
  
 
    // getBuyers()
    // {
    //   this.http.get(`${environment.apiUrl}/api/Buyers/GetBuyers`)
    //   .subscribe(
    //     res=> { 
    
    //       this.response = res;
    //       if (this.response.success == true){
    //         console.log(res);
    //       }
    //       else {
    //         this.toastr.error('Something went Worng', 'Message.');
    //           }
  
    //     }, err => {
    //       if (err.status == 400) {
    //         this.toastr.error('Something went Worng', 'Message.');
    //       }
    //     });
    // }

   getCountry()
    {
      this.http.get(`${environment.apiUrl}/api/Lookups/Countries`)
      .subscribe(
        res=> { 
          this.response = res;
          if (this.response.success == true){
            this.country =this.response.data;
          }
          else {
            this.toastr.error('Something went Worng', 'Message.');
              }
  
        }, err => {
          if (err.status == 400) {
            this.toastr.error('Something went Worng', 'Message.');
          }
        });
    }

    addBuyer()
    {
      let varr=  {
        "buyerCode": this.data.buyerCode ,
        "buyerName": this.data.buyerName,
        "billingAddress": this.data.buyerBillAddress ,
        "deliveryAddress": this.data.buyerDiliveryAddress  ,
        "countryId": 2,
        "contactNoPrimary": this.data.buyerPriCountry,
        "contactNoSecondary": this.data.buyerSecContact,
        "faxNumber": this.data.buyerFax,
        "ntnNumber":this.data.buyerNTN,
        "gstNumber":this.data.buyerGTS,
        "buyerDetails" : this.data.buyerDetails,
        "isParentBuyer": true,
        "parentBuyerId":1
      }
  
      this.http.
      post(`${environment.apiUrl}/api/Buyers/AddBuyer`,varr)
      .subscribe(
        res=> { 
    
          this.response = res;
          if (this.response.success == true){
            
          }
          else {
            this.toastr.error('Something went Worng', 'Message.');
              }
  
        }, err => {
          if (err.status == 400) {
            this.toastr.error('Something went Worng', 'Message.');
          }
        });
    }


  
 
}
