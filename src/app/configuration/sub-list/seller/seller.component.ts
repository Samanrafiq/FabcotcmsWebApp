import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellerCode:any;
  sellerName:any;
  sellerAddres:any;
  sellerCountry:any;
  sellerContact:any;
  constructor() { }

  ngOnInit(): void {
  }

}
