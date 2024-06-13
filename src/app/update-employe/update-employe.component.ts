import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../services/employe.service';
import { Department, Employe } from '../Model';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrl: './update-employe.component.css'
})
export class UpdateEmployeComponent implements OnInit {
  @Input() departments:Department[]=[];
 @Output()departementSelected=new EventEmitter<number>();
  selectedDepartment:number|undefined;

  idCin!:number|string;
  firstName!:string;
  lastName!:string;
  dateOfBirth!:Date|null;
    email!:string;
    phone!:string;
    address!:string;
    departementId!:number|undefined;
    //departementSigle?:string

    allDepartements:Department[]=[];
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private employeeService:EmployeService,
              private departementService:DepartementService) {
    
    
  }
  ngOnInit(): void {
     this.activatedRoute.params.subscribe(params=>{
      this.idCin=params["id"];
      this.employeeService.getEmployeById(this.idCin).subscribe(
        data=>{
          this.idCin=data.cin;
          this.firstName=data.firstName;
          this.lastName=data.lastName;
          this.dateOfBirth=data.dateOfBirth;
          this.email=data.email;
          this.phone=data.phone;
          this.address=data.address;
          this.departementId=data.departementId
        }

      )
     }

     )
     this.refresh();
  }
  refresh(){
    return this.departementService.getAllDepartment().subscribe(
      (data:Department[] )=>{
        this.allDepartements=data
      }
    )
  }
  onDepartementIdChange(event:any){
    this.selectedDepartment=event.target.value

  }

  saveUpdateEmploye(){
    let employe:Employe={
      cin:this.idCin,
      firstName:this.firstName,
      lastName:this.lastName,
      dateOfBirth:this.dateOfBirth,
      email:this.email,
      phone:this.phone,
      address:this.address,
      departementId:this.departementId

    }
    this.employeeService.updateEmploye(employe).subscribe(
      ()=>this.router.navigate(["employees"])
    )

  }

}
