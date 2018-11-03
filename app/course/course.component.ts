import { Component } from '@angular/core';

@Component({
  selector: 'st-course',
  templateUrl: './course.component.html'
})
export class CourseComponent {
  title = 'Angular 7';
  description = "Build more interactive web applciations!"
  topics : string[] = ["Data Binding", "Forms","Ajax","Routing"]

}
