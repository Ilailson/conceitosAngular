import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: { type: string; name: string; description: string; }[] = [];
  newStudentName = '';
  newStudentDescription = '';

  addApproved() {
    this.students.push({
      type: 'approved',
      name: this.newStudentName,
      description: this.newStudentDescription
    })
  }

  addSubstitute() {
    this.students.push({
      type: 'substitute',
      name: this.newStudentName,
      description: this.newStudentDescription
    })
  }
}
