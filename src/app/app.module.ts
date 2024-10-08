import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import{MatDialogModule} from'@angular/material/dialog';
import{MatInputModule} from'@angular/material/input';
import{MatButtonModule} from'@angular/material/button';
import { EditTaskDialogueComponent } from './edit-task-dialogue/edit-task-dialogue.component';







@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    EditTaskDialogueComponent,
  
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
