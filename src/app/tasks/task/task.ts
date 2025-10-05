import { Component, Input } from '@angular/core';
import { TaskService } from '../tasks.service';
import { TaskType } from './task.model';

// Since Task component is not a standalone component and declared in root AppModule, there is no
// need to import Card component here, because SharedModule is already imported in root AppModule.. 
@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input({ required: true}) task!: TaskType;

  constructor(private taskService: TaskService) {}

  onCompleted() {
    this.taskService.removeTask(this.task.id);
  }
}
