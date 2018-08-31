import { Component, OnInit } from '@angular/core';
import { Employee } from './model/employee';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employees : Employee[] = [];
  employee : Employee = {
      empId : 1, empname : "Tom"
  }
  constructor(private _demoService : DemoService) { }

  ngOnInit() {
    this.getUsers();
  }
  title : any = "This is my home component";
  addUser()
  {
    this._demoService.addUser(this.employee.empId,this.employee.empname);
    this.getUsers();
  }
  getUsers()
  {
    var tempemployees = this._demoService.loadUser();
    this.employees = tempemployees;
  }
}
