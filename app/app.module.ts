import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './http/add-book.component';
import { WebBooksComponent } from './http/webbooks.component';
import { BooksService } from './services/BooksService';

@NgModule({
  declarations: [
     AddBookComponent, WebBooksComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AddBookComponent, WebBooksComponent]
})
export class AppModule { }
