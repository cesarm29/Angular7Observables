// student.service.ts
//lib
import { Injectable } from '@angular/core';
//model
import { Student } from './student.model';
//lib
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
//array data students
students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    enrollmentnumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];

  constructor() { }

  //get students
  public getStudents(): any {
    const studentsObservable = new Observable(observer => {
           setTimeout(() => {
               observer.next(this.students);
           }, 1000);
    });
    return studentsObservable;
}

}
