import { Component } from '@angular/core';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';

@Component({
  selector: 'st-course',
  templateUrl: './course.component.html'
})
export class CourseComponent {
  title = 'Angular 7';
  description = "Build more interactive web applciations!"
  topics : string[] = ["Data Binding", "Forms","Ajax","Routing"]

  addTopic(newtopic : string) :void {
    var index = this.topics.indexOf(newtopic)
    if (index >= 0) 
    {
        alert("Sorry! Topic already present!")
        return;  // terminate function 
    }
    // Add topic to collection 
    this.topics.push(newtopic)
  }
}
