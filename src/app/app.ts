import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from './header/header';
import { Tasks } from "./tasks/tasks";
import { User } from './user/user';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, Tasks],
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
