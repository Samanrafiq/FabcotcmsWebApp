import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AddBankAccountComponent } from './add-bank-account/add-bank-account.component';
import { EditBankAccountComponent } from './edit-bank-account/edit-bank-account.component';

@Component({
  selector: 'app-bank-accounts',
  templateUrl: './bank-accounts.component.html',
  styleUrls: ['./bank-accounts.component.css']
})
export class BankAccountsComponent implements OnInit {

  listCount: number;
  response:any;
  rows:any=[];
  columns:any=[];
  data:any={};

  constructor(private http:HttpClient,
    private toastr: ToastrService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    // this.fetch((data) => {
    //   this.rows = data;
    //   this.listCount= this.rows.length;
    // });
  }

  
//   fetch(cb) {
//     let that = this;
//     that.http
//     .get(`${environment.apiUrl}/api/Configs/GetAllBank`)
//     .subscribe(res => {
//       this.response = res;
     
//     if(this.response.success==true)
//     {
//     that.data =this.response.data;
//     cb(this.data);
//     }
//     else{
//       this.toastr.error(this.response.message, 'Message.');
//     }
//       // this.spinner.hide();
//     }, err => {
//       if ( err.status == 400) {
//  this.toastr.error(err.error.message, 'Message.');;
//       }
//     //  this.spinner.hide();
//     });
//   }


  // deleteAccount(id)
  // {
  //   this.http.delete(`${environment.apiUrl}/api/Configs/DeleteBank/`+id.id )
  //   .subscribe(
  //     res=> { 
  //       this.response = res;
  //       if (this.response.success == true){
  //        this.toastr.error(this.response.message, 'Message.');
  //        this.fetch((data) => {
  //         this.rows = data;
  //       });
          
  //       }
  //       else {
  //         this.toastr.error('Something went Worng', 'Message.');
  //           }
 
  //     }, err => {
  //       if (err.status == 400) {
  //         this.toastr.error(this.response.message, 'Message.');
  //       }
  //     });
  // }




  
  addAccountForm(){
    const modalRef = this.modalService.open(AddBankAccountComponent, { centered: true });
          modalRef.result.then((data) => {
         // on close
          if(data ==true){
          //  this.date = this.myDate;
          //  this.fetch((data) => {
          //   this.rows = data;
        
          // });
           
  
         }
       }, (reason) => {
         // on dismiss
       });
  } 
  

  editAccountForm(row){
    const modalRef = this.modalService.open(EditBankAccountComponent, { centered: true });
    modalRef.componentInstance.userId =row.id;
          modalRef.result.then((data) => {
         // on close
          if(data ==true){
          //  this.date = this.myDate;
          //  this.fetch((data) => {
          //   this.rows = data;
            
          // });
           
         }
       }, (reason) => {
         // on dismiss
       });
  } 
  


}

