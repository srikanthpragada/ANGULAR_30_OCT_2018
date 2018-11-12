import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UseStackComponent } from './services/usestack.component';
import { StackComponent } from './services/stack.component';
import { StackService } from './services/stack.service';
import { LoginComponent } from './forms/login.component';
import { RLoginComponent } from './forms/rlogin.component';


@NgModule({
  declarations: [
     RLoginComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [StackService],
  bootstrap: [RLoginComponent]
})
export class AppModule { }
