import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './http/books.component';
import { HttpGitComponent } from './http/httpgit.component';



@NgModule({
  declarations: [
     HttpGitComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [HttpGitComponent]
})
export class AppModule { }
