import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-temlate-driven-form-demo',
  templateUrl: './temlate-driven-form-demo.component.html',
  styleUrls: ['./temlate-driven-form-demo.component.scss']
})
export class TemlateDrivenFormDemoComponent implements OnInit {
  name :string;
  email: string;
  // name='';
  semesters = [
    'Sem 1',
    'Sem 2',
    'Sem 3',
    'Sem 4'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('Submit clicked!');
  }
}


// Control States
// * ng-touched : The control is visited (if visited true)
// * ng-untouched: The control is not visited
// * ng-dirty : Input control's value is changed
// * ng-pristine : The input control value is not changed
// * ng-valid : Value of input control is valid
// * ng-invalid : value of input control is not valid