import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { UpdateDeleteProductComponent } from './component/update-delete-product/update-delete-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    UpdateDeleteProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
