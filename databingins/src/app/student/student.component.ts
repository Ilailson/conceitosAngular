import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StudentComponent {

  // 1
  //@Input: diz que componentes externos podem acessar informações.
  @Input() student!: { type: string; name: string; description: string; };
  // @Input('cadastrarEstudante') student!: { type: string; name: string; description: string; };
}
