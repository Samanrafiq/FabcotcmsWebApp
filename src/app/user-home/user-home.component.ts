import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {environment} from  './../../environments/environment';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  response:any;
  states:any;
  constructor( 
    //    private http: HttpClient,
    // private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  // onCountrychangeEdit(event:any){
  //   let that = this;
  //   that.http
  //   .get(`${environment.apiUrl}/api/Lookups/States`)
  //     .subscribe(res => {
  //       this.response = res;
  //       if (this.response.success == true) {
  //         that.states =this.response.data;
  //       }
  //       else {
  //         this.toastr.error('Something went Worng', 'Message.');
  //       }

  //     }, err => {
  //       if (err.status == 400) {
  //         this.toastr.error('Something went Worng', 'Message.');
  //       }
  //     });
  // }

}
