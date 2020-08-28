import { Component, OnInit, Input } from '@angular/core';
import { iStudent } from '../iStudent';
import { StudentDataService } from '../student-data.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  student :iStudent;
  constructor(
    private route : ActivatedRoute,
    private studentDataService : StudentDataService,
    private location : Location
  ) { }
  // old approach => pass student object as input directive
  // @Input() student : iStudent;
  ngOnInit(): void {
    this.getStudent();
  }

  getStudent() : void{
    //this will be id determined from the current route
    // http://localhost:4200/data/studentDetail/3
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentDataService.getStudent(id)
    .subscribe(
      student => this.student = student);
    
  }
  backClicked() : void{
    this.location.back();
  }
}
