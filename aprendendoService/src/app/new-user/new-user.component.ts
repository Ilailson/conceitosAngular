import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LogginService]
})
export class NewUserComponent{

  @Output() userCreated = new EventEmitter<{ name: string, status: string }>();

  constructor(private loggingService: LogginService) { }

  onCreateUser(userName: string, userStatus: string) {
    this.userCreated.emit({
      name: userName,
      status: userStatus
    });
    this.loggingService.logStatusChange(userName)
    // console.log('Novo usuário criado ' + userName);
  }

}
