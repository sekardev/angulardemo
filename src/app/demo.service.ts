import { Injectable } from '@angular/core';
import { Employee } from './home/model/employee';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  employees: Employee[] = [];
  constructor() { }

  addUser(id : number , name:string)
  {
    this.employees.push({empId : id, empname : name});
   
  }
  loadUser(): any[]
  {
    return this.employees
  }
}
