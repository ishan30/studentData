import { Injectable } from '@angular/core';
import { iStudent } from './iStudent';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  private apiUrl = 'api/students'; // URL for web API
  constructor(
    private http: HttpClient
  ) { }

  getStudents() : Observable<iStudent[]> {
    // return student without calling API via HTTP call
    // return of(STUDENTS);
    // call your API service via http call
// In web API
// When you want to read data use get operation
   
    return this.http.get<iStudent[]>(this.apiUrl);
  }

  // returns student data as per the input  -> return perticular data
  getStudent(inputId :number) : Observable<iStudent>{
    return of(STUDENTS.find( student => student.id === inputId));
  }
}
