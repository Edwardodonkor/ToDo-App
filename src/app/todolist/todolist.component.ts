import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogueComponent } from '../edit-task-dialogue/edit-task-dialogue.component';
import { findIndex } from 'rxjs';

interface Task {
  taskName: string;
  taskDescription: string;
  isCompleted: string;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit {
  taskArray:Task[]=[{taskName:'Hit the Gym',taskDescription:'mondays', isCompleted:'false'}];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  onSubmit(form: NgForm) {
    console.log(form);

    this.taskArray.push({
      taskName: form.controls['task'].value,
      taskDescription:form.controls['description'].value,
      isCompleted: 'false'
    })

    form.reset();
  }

  onDelete(index: number){
    console.log(index);

    this.taskArray.splice(index, 1);
  }

  onCheck(index: number) {
    console.log(this.taskArray);

    this.taskArray[index].isCompleted = '!this.taskArray[index].isCompleted';
  }
  today:Date=new Date()

  onEdit(index: number) {
    console.log(this.taskArray);

  
   // Method to open the edit dialog
   //editTask(task: Task): void {
   const dialogRef = this.dialog.open(EditTaskDialogueComponent, {
     width: '300px',
      data: {}, // Pass the task data to the dialog
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update the task in the taskArray
        const task = this.taskArray[index];
        if (index !== -1) {
          this.taskArray[index] = result; // Update the task with the edited values
        }
      }
    });
}
}
