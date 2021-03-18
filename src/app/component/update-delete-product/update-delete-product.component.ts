import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-delete-product',
  templateUrl: './update-delete-product.component.html',
  styleUrls: ['./update-delete-product.component.css']
})
export class UpdateDeleteProductComponent implements OnInit {

  constructor() { }

  products=[
    {id:1, product_name: "product 1", product_quantity: "quantity 1", product_price: "price 1"},
    {id:2, product_name: "product 2", product_quantity: "quantity 2", product_price: "price 2"},
    {id:3, product_name: "product 3", product_quantity: "quantity 3", product_price: "price 3"},
    {id:4, product_name: "product 4", product_quantity: "quantity 4", product_price: "price 4"},
    {id:5, product_name: "product 5", product_quantity: "quantity 5", product_price: "price 5"},
    {id:6, product_name: "product 6", product_quantity: "quantity 6", product_price: "price 6"},
    {id:7, product_name: "product 7", product_quantity: "quantity 7", product_price: "price 7"},
    {id:8, product_name: "product 8", product_quantity: "quantity 8", product_price: "price 8"}
  ]

  deleteProduct(){
    console.log("delete cliked")
  }

  updateProduct(){
    console.log("update clicked")
  }

  ngOnInit(): void {
  }

}
