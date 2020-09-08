import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-department-ad',
  templateUrl: './department-ad.component.html',
  styleUrls: ['./department-ad.component.scss']
})
export class DepartmentAdComponent implements OnInit {
  @Input() data:any
  constructor() { }

  ngOnInit(): void {
  }

}
