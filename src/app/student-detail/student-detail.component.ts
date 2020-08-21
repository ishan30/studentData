import { Component, OnInit, Input } from '@angular/core';
import { iStudent } from '../iStudent';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  constructor() { }
  @Input() student : iStudent;
  ngOnInit(): void {
  }

}
