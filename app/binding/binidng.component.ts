import { Component } from '@angular/core';

@Component({
    selector: 'st-binding',
    templateUrl: './binding.component.html',
})
export class BindingComponent {
    details : boolean = false; 
    inputType : string = "date";
    isNumber : boolean = true;
    isBig : boolean =false;
    mouseInfo : string = "";

    bigClicked(state) {
        this.isBig = state 
    }

    showMousePoint(e) {
        console.log(e)
        this.mouseInfo = "X = " + e.x + ", Y = " + e.y
    }
}
