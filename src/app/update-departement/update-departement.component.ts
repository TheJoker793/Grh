import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../services/departement.service';
import { Department } from '../Model';

@Component({
  selector: 'app-update-departement',
  templateUrl: './update-departement.component.html',
  styleUrl: './update-departement.component.css'
})
export class UpdateDepartementComponent implements OnInit {
  idDep!:number;
  name!:string;
  sigle!:string;
  constructor(private activatedRoute:ActivatedRoute,private departementService:DepartementService,private router: Router){}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.idDep=params['id'];
      this.departementService.getDepartementById(this.idDep).subscribe(
        data=>{
          this.name=data.name;
          this.sigle=data.sigle;
        }
      )
      
    }



      
    )
  }

  saveUpdateDepartement(){
    let department:Department={
      id:this.idDep,
      name:this.name,
      sigle:this.sigle
    }
    this.departementService.updateDepartement(department).subscribe(
      ()=>{
        console.log(department);
        

        this.router.navigate(["departement"])
          }
    )
  }

}
