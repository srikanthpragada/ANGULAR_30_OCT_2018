import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'st-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    username : string ;
    password : string;

    login() {
        console.log(this.username);
        console.log(this.password);
        // Ajax request for login 
    }
}