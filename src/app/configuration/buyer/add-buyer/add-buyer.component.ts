import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.css']
})
export class AddBuyerComponent implements OnInit {
  listCount:number;
  myDate=Date.now();
  response: any;
  data:any={};
  country:any=[];
  buyer:any[];
  countryId:null;
  @ViewChild(NgForm) buyerForm;
  date: number;
  
  constructor(private http:HttpClient,
              private toastr: ToastrService,  
              private _NgbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.getBuyers();
    this.getCountry();
  }

  get activeModal() {
    return this._NgbActiveModal;
  }



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



  
  getBuyers()
  {
    this.http.get(`${environment.apiUrl}/api/Buyers/GetBuyers`)
    .subscribe(
      res=> { 
  
        this.response = res;
        if (this.response.success == true){
          this.buyer =this.response.data;
          this.listCount =this.buyer.length;
         
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
      "billingAddress": this.data.buyerBillAddress,
      "deliveryAddress": this.data.buyerDiliveryAddress,
      "countryId": 1, 
      "contactNoPrimary": this.data.buyerContact,
      "contactNoSecondary": this.data.buyerOtherContact,
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
          this.toastr.success(this.response.message, 'Message.');
          this.getBuyers();
          this.buyerForm.reset();
          // this.activeModal.close(true);
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