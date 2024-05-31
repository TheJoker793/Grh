import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../services/employe.service';
import { Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';
import { Department } from '../Model';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrl: './add-employe.component.css'
})
export class AddEmployeComponent implements OnInit {
  departments:Department[]=[];
  //selectedDepartementId:number|null=null

  constructor(private employeService:EmployeService,
              private departementService:DepartementService,
              private router:Router) {
    
  }
  ngOnInit(): void {
    this.allDepartements();
    console.log();
    
  }
  allDepartements(){
    return this.departementService.getAllDepartment().subscribe(
      (data:Department[])=>{
        this.departments=data
      }

    )
  }


  addEmploye(employeeForme:any){
    let employee={
      cin:employeeForme.cin,
      firstName:employeeForme.firstName,
      lastName:employeeForme.lastName,
      dateOfBirth:employeeForme.dateOfBirth,
      email:employeeForme.email,
      phone:employeeForme.phone,
      address:employeeForme.address,
      
      departementId:1,
    };
    this.employeService.addEmploye(employee).subscribe(
      ()=>{
        console.log(employee);
        
        
        this.router.navigate(["employees"])
      }
    )

  }

}
