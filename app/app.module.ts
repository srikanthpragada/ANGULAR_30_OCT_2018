import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UseStackComponent } from './services/usestack.component';
import { StackComponent } from './services/stack.component';
import { StackService } from './services/stack.service';
import { LoginComponent } from './forms/login.component';


@NgModule({
  declarations: [
     LoginComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [StackService],
  bootstrap: [LoginComponent]
})
export class AppModule { }
