import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditSellerComponent } from './edit-seller/edit-seller.component';
@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  data:any={};
  response: any;
  seller:any[];
  country:any=[];
  countryId:null;
  constructor(private http:HttpClient,
              private toastr: ToastrService,
              private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.getCountry();
    this.getSellers();
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

  getSellers()
  {
    this.http.get(`${environment.apiUrl}/api/Sellers/GetSellers`)
    .subscribe(
      res=> { 
  
        this.response = res;
        if (this.response.success == true){
          this.seller =this.response.data;
         
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


  addSeller()
  {
    let varr=  {
           "sellerCode": this.data.sellerCode,
           "sellerName":  this.data.sellerName,
           "billingAddress": this.data.sellerBillAddress,
           "countryId": this.countryId,
           "contactNoPrimary":  this.data.sellerContact,
           "contactNoSecondary":  this.data.sellerOtherContact,
           "faxNumber":  this.data.sellerFax,
           "ntnNumber":  this.data.sellerNTN,
           "gstNumber":  this.data.sellerGST,
           "machineId": 0,
           "capabilitiesId": 0,
           "majorStrength":  this.data.sellerStrenght,
           "leadTime":  this.data.leadTime,
           "sellerDetails":  this.data.sellerDetails,
           "isParentSeller": true,
           "parentSellerId": 0
    }

    this.http.
    post(`${environment.apiUrl}/api/Sellers/AddSeller`,varr)
    .subscribe(
      res=> { 
        this.response = res;
        if (this.response.success == true){
          this.toastr.success(this.response.message, 'Message.');
          this.getSellers();
      

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


  deleteSeller(id)
  {
    this.http.delete(`${environment.apiUrl}/api/Sellers/DeleteSeller/`+id.id )
    .subscribe(
      res=> { 
        this.response = res;
        if (this.response.success == true){
         this.toastr.error(this.response.message, 'Message.');
         this.getSellers();
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


  editSeller(popup){
    const modalRef = this.modalService.open(EditSellerComponent, { centered: true });
          modalRef.componentInstance.userId = popup.id;
          modalRef.result.then((data) => {
         // on close
         if(data ==true){
           this.getSellers();
         }
       }, (reason) => {
         // on dismiss
       });
  } 
  


}
