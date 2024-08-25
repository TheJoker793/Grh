import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../services/departement.service';
import { Department } from '../Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrl: './list-departement.component.css'
})
export class ListDepartementComponent implements OnInit {
  departments:Department[]=[];
  constructor(private departementService:DepartementService,private router:Router){

  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.departementService.getAllDepartment().subscribe(

      (data:Department[])=>{
        this.departments=data;
      },
      (error)=>{console.log(error)}

    )

  }
  goAdd(){
    this.router.navigate(["addDepartement"])

  }
  deleteDepartement(dep:Department){
    console.log("debut supression");

    this.departementService.deleteDepartement(dep).subscribe(
      (data)=>{
        
        this.refresh();
        console.log("fin suppression");
      },
      error=>console.error(error)
      

    )

  }
  goUpdate(dep:any){
    this.router.navigate(["updateDepartement",dep.id])

  }
  

}
