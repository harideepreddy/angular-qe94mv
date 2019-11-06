import { Component } from '@angular/core';
@Component({
  selector: 'my-employee',
  templateUrl: 'app/employee/employee.Component.html'
})
export class EmployeeComponent {
  firstname:string = "harideep";
  lastname:string = "Reddy";
  gender:string = "Male";
  age:number = 24;
}