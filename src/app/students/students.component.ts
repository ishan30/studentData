import { Component, OnInit } from '@angular/core';

import {iStudent} from '../iStudent'
import {STUDENTS} from '../mock-students'
import {StudentDataService} from '../student-data.service'
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit  {
firstName = '';
selectedStudent : iStudent ; 
// student : iStudent = {
//   id : 1,
//   name : 'Ishan',
//   mobileNo: 123456789,
//   email : 'abc@xyz.com'
// }

//  students = STUDENTS;
 students;

   constructor(private studentDataService : StudentDataService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  onSelect(student:iStudent) : void {
    this.selectedStudent = student;
  }

  getStudents() : void {
    // this.students = this.studentDataService.getStudents();
    this.studentDataService.getStudents()
    .subscribe(
      result => 
      this.students = result
      );
  }
}
