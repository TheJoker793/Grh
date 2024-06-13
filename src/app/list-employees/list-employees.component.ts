import { Component, OnInit } from '@angular/core';
import { Employe } from '../Model';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit {
  employees:Employe[]=[];
  constructor(private employeesService:EmployeService,private router:Router ){}
  ngOnInit(): void {
   this.refrech();

  }
  refrech(){
    return this.employeesService.getAllEmployees().subscribe(
      (data:Employe[])=>{
        this.employees=data;
        console.log(this.employees);
        
      },
      error=>console.log(error)
      
    )
  }
  GoAddEmploye(){
    this.router.navigate(["addEmployee"]);
  }
  goUpdate(emp:any){
    this.router.navigate(["updateEmploye",emp.cin]);


  }
  deleteEmploye(emp:any){
    this.employeesService.deleteEmploye(emp).subscribe(
      ()=>{
        this.refrech();

      }
    )
  }

}
