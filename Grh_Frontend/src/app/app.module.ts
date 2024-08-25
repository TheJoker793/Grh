import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { DepartementService } from './services/departement.service';
import { EmployeService } from './services/employe.service';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { FormsModule } from '@angular/forms';
import { UpdateDepartementComponent } from './update-departement/update-departement.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { AddEmployeComponent } from './add-employe/add-employe.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDepartementComponent,
    AddDepartementComponent,
    UpdateDepartementComponent,
    HomePageComponent,
    ListEmployeesComponent,
    AddEmployeComponent,
    UpdateEmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [DepartementService,EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
