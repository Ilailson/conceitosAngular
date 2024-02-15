import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogginService } from '../logging.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // informações estão vindo do componente pai
  @Input() user!: { name: string; status: string; };
  @Input() id!: number;


  // injeção de dependencia no construtor
  constructor(
    // private loggingService: LogginService,
    private userService: UserService
    ) { }

  onSetTo(status: string) {
    this.userService.updateStatus(this.id, status)

   
  }

}
