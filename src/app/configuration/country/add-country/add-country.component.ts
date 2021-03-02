import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  data:any={};
  response: any;
  constructor() { }

  ngOnInit(): void {
  }

}
