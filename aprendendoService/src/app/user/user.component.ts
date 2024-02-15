import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() user!: { name: string; status: string; };
  @Input() id!: number;

  @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

  constructor() { }

  onSetTo(status: string) {
    this.statusChanged.emit({ id: this.id, newStatus: status });
    console.log('Foi alterado status do usuário para ' + status);
    
  }

}
