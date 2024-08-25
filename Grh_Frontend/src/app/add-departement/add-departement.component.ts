import { Component } from '@angular/core';
import { DepartementService } from '../services/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrl: './add-departement.component.css',
})
export class AddDepartementComponent {
  constructor(private departementService:DepartementService,private router:Router){

  }
  addDepartement(departementForm:any){
    let departement={
      
      name:departementForm.name,
      sigle:departementForm.sigle
    };
    this.departementService.addDepartement(departement).subscribe(
      ()=>{
        this.router.navigate(["departement"])
      }
    )
  }

}
