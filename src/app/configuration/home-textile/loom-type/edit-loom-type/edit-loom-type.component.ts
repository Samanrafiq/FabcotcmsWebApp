import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-loom-type',
  templateUrl: './edit-loom-type.component.html',
  styleUrls: ['./edit-loom-type.component.css']
})
export class EditLoomTypeComponent implements OnInit {
  data:any={};
  response: any;
  @Input() userId;
  
  constructor(private http:HttpClient,
    private toastr: ToastrService,
    private _NgbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editLoom();
  }

  get activeModal() {
    return this._NgbActiveModal;
  }


  editLoom()
  {
    this.http.get(`${environment.apiUrl}/api/TextileGarments/GetLoomTypeById/`+this.userId )
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

  
  UpdateLoom()
  {
    let varr = {
      "type": this.data.type,
      "description": this.data.description
    }

    this.http.
    put(`${environment.apiUrl}/api/TextileGarments/Update/`+this.userId,varr)
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

