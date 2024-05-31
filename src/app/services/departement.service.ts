import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../Model';
import { environement } from '../environements/environement.developement';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private http:HttpClient) { }
  getAllDepartment(){
    return this.http.get<Department[]>(environement.baseUrl+"Departements")
  }
  getDepartementById(id:number){
    return this.http.get<Department>(environement.baseUrl+"Departements/"+id)
  }
  addDepartement(departement:Department) {
    return this.http.post<Department>(environement.baseUrl+"Departements",departement)
  }
  updateDepartement(departement:Department){
    return this.http.put<Department>(environement.baseUrl+"Departements/"+departement.id,departement)
  }
  deleteDepartement(departement:Department){
    
    return this.http.delete(environement.baseUrl+"Departements/"+departement.id)
  }

}
