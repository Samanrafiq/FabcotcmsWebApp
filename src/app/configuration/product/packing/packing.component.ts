import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddPackingComponent } from './add-packing/add-packing.component';
import { EditPackingComponent } from './edit-packing/edit-packing.component';
@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.css']
})
export class PackingComponent implements OnInit {
  response:any;
  rows:any=[];
  data:any={};
  columns:any=[];
  listCount: number;
  myDate=Date.now();


  constructor(private http:HttpClient,
    private toastr: ToastrService,
    private modalService: NgbModal,) { }

 
    ngOnInit(): void {
      this.fetch((data) => {
        this.rows = data;
      });
    }
  
  
  
  
  
    
  
    fetch(cb) {
      let that = this;
      that.http
      .get(`${environment.apiUrl}/api/Products/GetAllPacking`)
      .subscribe(res => {
        this.response = res;
        this.listCount = this.fetch.length;
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
  
  
  
    deletePacking(id)
    {
      this.http.delete(`${environment.apiUrl}/api/Products/DeletePacking/`+id.id )
      .subscribe(
        res=> { 
          this.response = res;
          if (this.response.success == true){
           this.toastr.error(this.response.message, 'Message.');
           this.fetch((data) => {
            this.rows = data;
          });
            
          }
          else {
            this.toastr.error('Something went Worng', 'Message.');
              }
   
        }, err => {
          if (err.status == 400) {
            this.toastr.error(this.response.message, 'Message.');
          }
        });
    }
  
  
  
    addPackingForm(){
      const modalRef = this.modalService.open(AddPackingComponent, { centered: true });
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
    
  
    editPackingForm(row){
      const modalRef = this.modalService.open(EditPackingComponent, { centered: true });
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