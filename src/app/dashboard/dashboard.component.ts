import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { iStudent } from '../iStudent';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  students : iStudent[];
  constructor(private studentDataService : StudentDataService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() :void {
    this.studentDataService.getStudents()
    .subscribe(result => this.students = result.slice(1,5));
  }
}
