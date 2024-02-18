import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  @Output() approvedCreated = new EventEmitter<{name: string, description: string}>();
  @Output() subtituteCreated = new EventEmitter<{name: string, description: string}>();


  newStudentName = '';
  newStudentDescription = '';

  addApproved() {
    this.approvedCreated.emit({
      name: this.newStudentName,
      description: this.newStudentDescription
    });
  }

  addSubstitute() {
    this.subtituteCreated.emit({
      name: this.newStudentName,
      description: this.newStudentDescription
    });
  }

  ngOnInit(): void {

  }

}
