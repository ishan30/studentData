import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb(){
    const STUDENTS = [
      { 
        id : 1,
        name : 'Ishan',
        mobileNo: 123456789,
        email : 'abc@xyz.com'
    },
    { 
        id : 2,
        name : 'Shah',
        mobileNo: 19999999,
        email : 'student2@xyz.com'
    },
    { 
        id : 3,
        name : 'Student 3',
        mobileNo: 33339999,
        email : 'student3@xyz.com'
    },
    { 
        id : 4,
        name : 'Student 4',
        mobileNo: 43339999,
        email : 'student4@xyz.com'
    },
    { 
        id : 5,
        name : 'Student 5',
        mobileNo: 53339999,
        email : 'student5@xyz.com'
    }
    ];
    return (STUDENTS);
  }

}
