import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';

@NgModule({
  declarations: [
    CourseComponent, AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CourseComponent]
})
export class AppModule { }
