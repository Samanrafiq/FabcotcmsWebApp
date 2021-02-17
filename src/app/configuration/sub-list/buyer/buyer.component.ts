import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBuyerComponent } from './edit-buyer/edit-buyer.component';

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
    buyer:any[];
    countryId:null;
  @ViewChild(NgForm) userForm ;
  constructor(private http:HttpClient,
              private toastr: ToastrService,  
              private modalService: NgbModal,
              // private _NgbActiveModal: NgbActiveModal,
                )
               { }

             
              
  ngOnInit(){
    this.getBuyers();
    this.getCountry();
    // this._NgbActiveModal.close()

  }

  // get activeModal() {
  //   return this._NgbActiveModal;
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

 
    getBuyers()
    {
      this.http.get(`${environment.apiUrl}/api/Buyers/GetBuyers`)
      .subscribe(
        res=> { 
    
          this.response = res;
          if (this.response.success == true){
            this.buyer =this.response.data;
           
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
        "countryId": 2, 
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
           this.userForm.reset();

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


 editBuyer(popup){
   const modalRef = this.modalService.open(EditBuyerComponent, { centered: true });
      modalRef.componentInstance.userId = popup.id;
      modalRef.result.then((data) => {
        // on close
        if(data ==true){
          this.getBuyers();

        }
      }, (reason) => {
        // on dismiss
      });



 } 
 


 deleteBuyer(id)
 {
   this.http.delete(`${environment.apiUrl}/api/Buyers/DeleteBuyer/`+id.id )
   .subscribe(
     res=> { 
       this.response = res;
       if (this.response.success == true){
        this.toastr.success(this.response.message, 'Message.');
        this.getBuyers();
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