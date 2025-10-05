import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserType } from './user.model';
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [Card],
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
