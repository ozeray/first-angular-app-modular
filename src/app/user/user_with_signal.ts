//NEW WAY:
// // import { Component, computed, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const index = () => Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class User {
//   selecteduser = signal(DUMMY_USERS[index()]);
//   public imagePath = computed(() => 'assets/users/' + this.selecteduser().avatar);

//   onSelectUser() {
//     this.selecteduser.set(DUMMY_USERS[index()]);
//     console.log('Clicked');
//   }
// }
