import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-ad',
  templateUrl: './student-ad.component.html',
  styleUrls: ['./student-ad.component.scss']
})
export class StudentAdComponent implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
