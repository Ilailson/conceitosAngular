import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  newStudentName = '';
  newStudentDescription = '';

  addApproved() {
    // this.students.push({
    //   type: 'approved',
    //   name: this.newStudentName,
    //   description: this.newStudentDescription
    // })
  }

  addSubstitute() {
    // this.students.push({
    //   type: 'substitute',
    //   name: this.newStudentName,
    //   description: this.newStudentDescription
    // })
  }

  ngOnInit(): void {

  }

}
