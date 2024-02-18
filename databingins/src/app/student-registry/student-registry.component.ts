import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  @Output() approvedCreated = new EventEmitter<{name: string, description: string}>();
  @Output() subtituteCreated = new EventEmitter<{name: string, description: string}>();


  // newStudentName = '';
  newStudentDescription = '';

  addApproved(nameInput: HTMLInputElement) {
    this.approvedCreated.emit({
      name: nameInput.value,
      description: this.newStudentDescription
    });
  }

  addSubstitute(nameInput: HTMLInputElement) {
    this.subtituteCreated.emit({
      name: nameInput.value,
      description: this.newStudentDescription
    });
  }

  ngOnInit(): void {

  }

}
