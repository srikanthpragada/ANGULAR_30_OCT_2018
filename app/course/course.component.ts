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

  deleteTopic(topic : string) : void {
    var pos =  this.topics.indexOf(topic)
    if ( pos >= 0)
    {
        if (! confirm("Do you want to delete topic -> " + topic + "??") )
          return;
        this.topics.splice(pos,1)
    }
    else
        alert("Sorry! Topic not found!")
  }
}
