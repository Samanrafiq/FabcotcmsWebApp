import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAgentFormComponent } from './add-agent-form/add-agent-form.component';
import { EditAgentFormComponent } from './edit-agent-form/edit-agent-form.component';

@Component({
  selector: 'app-foreign-agent',
  templateUrl: './foreign-agent.component.html',
  styleUrls: ['./foreign-agent.component.css']
})
export class ForeignAgentComponent implements OnInit {
  response:any;
  rows:any=[];
  columns:any=[];
  data:any={};
  @ViewChild('myTable') table: ForeignAgentComponent;
  listCount: number;
  date: number;
  myDate=Date.now();
  constructor(private http:HttpClient,
    private toastr: ToastrService,  
    private modalService: NgbModal,

      )
     { }

  ngOnInit(): void {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    let that = this;
    that.http
    .get(`${environment.apiUrl}/api/Configs/GetAllExternalAgent`)
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

  deleteAgent(id)
  {
    this.http.delete(`${environment.apiUrl}/api/Configs/DeleteExternalAgent/`+id.id )
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


  addAgentForm(){
    const modalRef = this.modalService.open(AddAgentFormComponent, { centered: true });
          modalRef.result.then((data) => {
         // on close
          if(data ==true){
           this.date = this.myDate;
           this.fetch((data) => {
            this.rows = data;
          });
           
  
         }
       }, (reason) => {
         // on dismiss
       });
  } 
  


  editAgentForm(row){
    const modalRef = this.modalService.open(EditAgentFormComponent, { centered: true });
    modalRef.componentInstance.userId = row.id;
          modalRef.result.then((data) => {
         // on close
          if(data ==true){
           this.date = this.myDate;
           this.fetch((data) => {
            this.rows = data;
          });
           
  
         }
       }, (reason) => {
         // on dismiss
       });
  } 
  



}
