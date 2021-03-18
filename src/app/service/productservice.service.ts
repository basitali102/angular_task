import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }

  product_list=[];

  public _subject = new BehaviorSubject<any>({})
  emitupdatedata<T>(data:T){
    this._subject.next(data)
  }

  setupdatedata<T>():Observable<T>{
    return this._subject.asObservable()
  }


  AddProduct(product:{}){
    this.product_list.push(product);
  }

  getProductlist(){
    return this.product_list;
  }


}
