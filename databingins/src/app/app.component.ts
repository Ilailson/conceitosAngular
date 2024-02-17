import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // students: { type: string; name: string; description: string; }[] = [];
  //2 Preenchendo os dados no componente pai com mesma informação do filho
  students = [{ type: 'approved', name: 'José', description: 'Masculino' },
  { type: 'approved', name: 'Maria', description: 'Feminino' }];
}
