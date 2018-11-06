import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import { BindingComponent } from './binding/binidng.component';

@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BindingComponent]
})
export class AppModule { }
