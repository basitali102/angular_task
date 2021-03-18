import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  id:number;
  product_name:string;
  product_quantity:string;
  product_price:string;

  AddProduct(){
    console.log("add button clicked")
  }

  ngOnInit(): void {
  }

}
