import { Injectable } from '@angular/core';
import { StudentAdComponent } from './student-ad/student-ad.component';
import { AdItem } from "./ad-item";
import { DepartmentAdComponent } from './department-ad/department-ad.component';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }
 // return advertisements
  getAds() {
    return  [
      new AdItem(StudentAdComponent,{name: 'Vaman'}),
      new AdItem(DepartmentAdComponent , {name : 'CS Department', bio :'We are computer science students'}),
      new AdItem(DepartmentAdComponent, {name: 'IT Department' , bio: 'IT works!!'}),
      new AdItem(DepartmentAdComponent, {name : 'EC Department', bio: 'EC Students we work with cicruits'})
    ]
  }
}
