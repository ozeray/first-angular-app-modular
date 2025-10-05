import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
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
