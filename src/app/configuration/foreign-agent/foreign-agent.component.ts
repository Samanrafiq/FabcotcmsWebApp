import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-foreign-agent',
  templateUrl: './foreign-agent.component.html',
  styleUrls: ['./foreign-agent.component.css']
})
export class ForeignAgentComponent implements OnInit {
  response:any;
  rows:[];
  columns=[];
  data:any={};
  @ViewChild('myTable') table: ForeignAgentComponent;
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

}
