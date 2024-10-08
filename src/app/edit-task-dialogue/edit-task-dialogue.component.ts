import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task-dialogue',
  templateUrl: './edit-task-dialogue.component.html',
  styleUrl: './edit-task-dialogue.component.css'
})
export class EditTaskDialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<EditTaskDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any // Define your task data structure
  ) {}

  onNoClick(): void {
    this.dialogRef.close(); // Close the dialog without saving
  }

  onSave(): void {
    this.dialogRef.close(this.data); // Close and pass the edited data
  }
}



