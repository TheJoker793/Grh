import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
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
 @Input() departments:Department[]=[];
 @Output()departementSelected=new EventEmitter<number>();
  selectedDepartment:number|undefined;

  constructor(private employeService:EmployeService,
              private departementService:DepartementService,
              private router:Router) {
    
  }
  ngOnInit(): void {
    this.allDepartements();
    
  }




  allDepartements(){
    return this.departementService.getAllDepartment().subscribe(
      (data:Department[])=>{
        this.departments=data
      }

    )
  }
  onDepartementIdChange(event:any){
    this.selectedDepartment=event.target.value

  }


  addEmploye(employeeForme:any){
    
    let employee={
      
      cin:employeeForme.cin,
      firstName:employeeForme.firstName,
      lastName:employeeForme.lastName,      
      dateOfBirth:null,
      email:employeeForme.email,
      phone:employeeForme.phone,
      address:employeeForme.address,
      departementId:this.selectedDepartment,
    };
    
    
    this.employeService.addEmploye(employee).subscribe(
      ()=>{
        console.log(employee);
        
        
        this.router.navigate(["employees"])
      }
    )

  }

}
