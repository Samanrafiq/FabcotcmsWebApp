import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditCurrencyComponent } from './edit-currency/edit-currency.component';
import { AddCurrencyComponent } from './add-currency/add-currency.component';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  listCount: number;
  response:any;
  rows:any=[];
  columns:any=[];
  data:any={};
  myDate=Date.now();

  constructor(private http:HttpClient,
    private toastr: ToastrService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this.fetch((data) => {
      this.rows = data;
      this.listCount= this.rows.length;
    });
  }

  
  fetch(cb) {
    let that = this;
    that.http
    .get(`${environment.apiUrl}`)
    .subscribe(res => {
      this.response = res;
     
    if(this.response.success==true)
    {
    that.data =this.response.data;
    cb(this.data);
    }
    else{
      this.toastr.error(this.response.message, 'Message.');
    }
      // this.spinner.hide();
    }, err => {
      if ( err.status == 400) {
 this.toastr.error(err.error.message, 'Message.');;
      }
    //  this.spinner.hide();
    });
  }


  // deleteCurrency(id)
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




  
  addCurrencyForm(){
    const modalRef = this.modalService.open(AddCurrencyComponent, { centered: true });
          modalRef.result.then((data) => {
         // on close
          if(data ==true){
          //  this.date = this.myDate;
           this.fetch((data) => {
            this.rows = data;
        
          });
         
        }
       }, (reason) => {
         // on dismiss
       });
  } 
  

  editCurrencyForm(row){
    const modalRef = this.modalService.open(EditCurrencyComponent, { centered: true });
    modalRef.componentInstance.userId =row.id;
          modalRef.result.then((data) => {
         // on close
          if(data ==true){
          //  this.date = this.myDate;
           this.fetch((data) => {
            this.rows = data;
            
          });
           
         }
       }, (reason) => {
         // on dismiss
       });
  } 
  


}

