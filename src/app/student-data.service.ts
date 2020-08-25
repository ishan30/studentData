import { Injectable } from '@angular/core';
import { iStudent } from './iStudent';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  getStudents() : Observable<iStudent[]> {
    // call your API service via http call
    return of(STUDENTS);
  }

  // returns student data as per the input  -> return perticular data
  getStudent(inputId :number) : Observable<iStudent>{
    return of(STUDENTS.find( student => student.id === inputId));
  }
}
