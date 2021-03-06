import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-buyer',
  templateUrl: './edit-buyer.component.html',
  styleUrls: ['./edit-buyer.component.css']
})
export class EditBuyerComponent implements OnInit {
  @Input() userId;
  data:any={};
  country:any=[];
  response: any;
  states: any;
  buyer:any[];
  countryId:null;


  constructor(private http:HttpClient,
              private toastr: ToastrService,
              private _NgbActiveModal: NgbActiveModal,) { }

  ngOnInit(): void {
    this.editBuyer(this.userId);
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


  
  editBuyer(id)
  {
    this.http.get(`${environment.apiUrl}/api/Buyers/GetBuyer/`+id )
    .subscribe(
      res=> { 
        this.response = res;
        if (this.response.success == true){
          this.data =this.response.data;
          
         
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


  updateBuyer()
  {
    let varr=  {
      "buyerCode": this.data.buyerCode ,
      "buyerName": this.data.buyerName,
      "billingAddress": this.data.billingAddress,
      "deliveryAddress": this.data.deliveryAddress,
      "countryId": this.data.countryId, 
      "contactNoPrimary": this.data.contactNoPrimary,
      "contactNoSecondary": this.data.contactNoSecondary,
      "faxNumber": this.data.faxNumber,
      "ntnNumber":this.data.ntnNumber,
      "gstNumber":this.data.gstNumber,
      "buyerDetails" : this.data.buyerDetails,
      "isParentBuyer": true,
      "parentBuyerId":1
    }
 
    this.http.
    put(`${environment.apiUrl}/api/Buyers/UpdateBuyer/`+this.userId,varr)
    .subscribe(
      res=> { 
  
        this.response = res;
        if (this.response.success == true){
          this.toastr.success(this.response.message, 'Message.');
          this.activeModal.close(true);

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
