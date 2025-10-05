import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
 
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  get selectedUser() {
    return this.users.find(u => u.id === this.selectedUserId);
  }
}
