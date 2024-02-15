import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent{

  @Output() userCreated = new EventEmitter<{ name: string, status: string }>();

  constructor() { }

  onCreateUser(userName: string, userStatus: string) {
    this.userCreated.emit({
      name: userName,
      status: userStatus
    });
    console.log('Novo usuário criado ' + userName);
  }

}
