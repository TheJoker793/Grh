import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  
{
  path:"departement",
  component:ListDepartementComponent
},
{
  path:"addDepartement",
  component:AddDepartementComponent
},
{
  path:"updateDepartement/:id",
  component:UpdateDepartementComponent
},
{
  path:"employees",
  component:ListEmployeesComponent
},
{
  path:"addEmployee",
  component:AddEmployeComponent
},
{
  path:"updateEmploye/:id",
  component:UpdateEmployeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
