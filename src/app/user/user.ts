import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type UserType } from './user.model';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  imports: [SharedModule],
  styleUrl: './user.css',
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
