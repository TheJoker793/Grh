import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employe } from '../Model';
import { environement } from '../environements/environement.developement';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http:HttpClient) { }
  getAllEmployees(){
    return this.http.get<Employe[]>(environement.baseUrl+"Employes")
  }
  getEmployeById(id:number|string){
    return this.http.get<Employe>(environement.baseUrl+"Employes/"+id)
  }
  addEmploye(employe:Employe) {
    console.log("post");
    
    return this.http.post<Employe>(environement.baseUrl+"Employes",employe)
    
    
  }
  updateEmploye(employe:Employe){
    return this.http.put<Employe>(environement.baseUrl+`Employes/${employe.cin}`,employe)
  }
  deleteEmploye(employe:Employe){
    return this.http.delete(environement.baseUrl+`Employes/${employe.cin}`)
  }

}
