import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
