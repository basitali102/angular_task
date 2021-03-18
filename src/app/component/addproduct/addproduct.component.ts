import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { ProductserviceService } from 'src/app/service/productservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor(private productservice: ProductserviceService) { }

  id:number;
  product_name:string;
  product_quantity:string;
  product_price:string;

  AddProduct(){

    let itemfilter=[]
    for(let item of this.productservice.product_list){
      if(item.id == this.id){
        itemfilter.push(item)
      }
    }

    if(itemfilter.length<=0){
      this.productservice.AddProduct({id:this.id, product_name:this.product_name, product_quantity:this.product_quantity, product_price:this.product_price })
      this.id= null;
      this.product_name="";
      this.product_quantity="";
      this.product_price="";
    }
    else if(confirm("the record exist! want to update the record?")){
      let product = this.productservice.product_list
      let index:number = product.findIndex((item)=> item.id == this.id)
      this.productservice.product_list[index] = {...product[index], id:this.id, product_name:this.product_name, product_quantity:this.product_quantity, product_price:this.product_price}
      this.id= null;
      this.product_name="";
      this.product_quantity="";
      this.product_price="";
    }
    else{
      this.id= null;
      this.product_name="";
      this.product_quantity="";
      this.product_price="";
    }
    
  }

  ngOnInit(): void {
    this.productservice.setupdatedata<{}>().subscribe((data)=>{
      this.id = data['id'];
      this.product_name =data["product_name"]
      this.product_price= data["product_price"]
      this.product_quantity= data["product_quantity"]
      
    })
  }

}
