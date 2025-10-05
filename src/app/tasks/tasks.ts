import { Component, Input } from '@angular/core';
import { type UserType } from '../user/user.model';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [Task, NewTask],
})
export class Tasks {
  @Input({ required: true }) user!: UserType;
  taskWillBeAdded = false;

  // Angular creates only one instance of task service and injects into our service variable.
  constructor(private taskService: TaskService) {} 

  get selectedUserTasks() {
    return this.taskService.getUserTasks(this.user.id);
  }

  onAddTask() {
    this.taskWillBeAdded = true;
  }

  onAddClose() {
    this.taskWillBeAdded = false;
  }
}
