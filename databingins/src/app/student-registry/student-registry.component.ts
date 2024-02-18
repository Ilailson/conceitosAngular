import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-student-registry',
  templateUrl: './student-registry.component.html',
  styleUrls: ['./student-registry.component.css']
})
export class StudentRegistryComponent implements OnInit {

  @Output() approvedCreated = new EventEmitter<{name: string, description: string}>();
  @Output() subtituteCreated = new EventEmitter<{name: string, description: string}>();


  // newStudentName = '';
  // studentDescriptionInput = '';

  @ViewChild('studentDescriptionInput')
  studentDescriptionInput!: ElementRef;
  addApproved(nameInput: HTMLInputElement) {
    this.approvedCreated.emit({
      name: nameInput.value,
      description: this.studentDescriptionInput.nativeElement.value
    });
  }

  addSubstitute(nameInput: HTMLInputElement) {
    this.subtituteCreated.emit({
      name: nameInput.value,
      description: this.studentDescriptionInput.nativeElement.value
    });
  }

  ngOnInit(): void {

  }

}
