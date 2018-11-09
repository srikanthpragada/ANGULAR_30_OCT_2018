import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { BindingComponent } from './binding/binidng.component';
import { PipesDemoComponent } from './pipes/pipesdemo.component';
import { BracketsPipe } from './pipes/brackets.pipe';
import { FirstComponent } from './icc/first.component';
import { SecondComponent } from './icc/second.component';
import { ProductsListComponent } from './icc/products-list.component';
import { ProductDetailsComponent } from './icc/product-details.component';

@NgModule({
  declarations: [
     ProductsListComponent, ProductDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ProductsListComponent]
})
export class AppModule { }
