import { Component, EventEmitter, Output } from '@angular/core';
import { LogginService } from '../logging.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
  providers: [LogginService]
})
export class NewUserComponent{


// injeção de dependencia
  constructor(
    private loggingService: LogginService,
    private userService: UserService
    ) { }

  onCreateUser(userName: string, userStatus: string) {
    this.userService.createUser(userName, userStatus)
    this.loggingService.logStatusChange(userName)
  }
}
