import { Injectable } from '@angular/core';
import { iStudent } from './iStudent';
import { STUDENTS } from './mock-students';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  private apiUrl = 'api/STUDENTS'; // URL for web API
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

  // API -> Read => get
  // API -> Update => put -> it always needs input parameter to pass as an object in body
  // API -> Create/Add/Insert => post ->
  // API -> Delete => delete 



  // returns student data as per the input  -> return perticular data
  getStudent(inputId :number) : Observable<iStudent>{
    return of(STUDENTS.find( student => student.id === inputId));
  }

  //update student data
  updateStudent(student: iStudent) : Observable<any> {
    return this.http.put(this.apiUrl,student);
  }

  deleteStudent(student: iStudent) : Observable<any>{

    const currentStudentId = student.id;
    const deleteUrl = `${this.apiUrl}/${currentStudentId}`;
    return this.http.delete(deleteUrl);
  }

  addStudent(student: iStudent) : Observable<any>{
    return this.http.post(this.apiUrl,student);
  }
}
