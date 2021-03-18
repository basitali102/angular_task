import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-update-delete-product',
  templateUrl: './update-delete-product.component.html',
  styleUrls: ['./update-delete-product.component.css']
})
export class UpdateDeleteProductComponent implements OnInit {

  constructor(private productservice: ProductserviceService) { }

  products=[];


  deleteProduct(id:number){
    let index:number = this.productservice.product_list.findIndex((item)=> item.id == id)
    this.productservice.product_list.splice(index,1);
  }

  updateProduct(id:number){
    let product = this.productservice.product_list
    let index:number = product.findIndex((item)=> item.id == id)
    this.productservice.emitupdatedata<{}>({"id":product[index].id, "product_name":product[index].product_name, "product_quantity":product[index].product_quantity, "product_price":product[index].product_price})
    
  }

  ngOnInit(): void {
    this.products = this.productservice.getProductlist();
  }

}
