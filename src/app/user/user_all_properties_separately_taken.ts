// import { Component, EventEmitter, Input, Output } from '@angular/core';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.html',
//   styleUrl: './user.css',
// })
// export class User {
//   @Input({required: true}) id!: string;
//   @Input({required: true}) avatar!: string;
//   @Input({required: true}) name!: string;
//   @Output() select = new EventEmitter<string>();
//   // OR: select = output<string>(); NEWER
  
//   get imagePath(): string { return 'assets/users/' + this.avatar }

//   onSelectUser() {
//     this.select.emit(this.id);
//   } 
// }
