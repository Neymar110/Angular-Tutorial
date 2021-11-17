import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './03-setup-and-teardown/vote/vote.component';
import { TodoFormComponent } from './04-forms/todo-form/todo-form.component';
import { ServicesComponent } from './services/services.component';
import { AComponent } from './a/a.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent,
    ServicesComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormBuilder,
    FormGroup,
    Validators
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
