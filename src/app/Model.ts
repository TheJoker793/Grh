export interface Department{
   id?:number,
   name:string,
   sigle:string
}
export interface Employe{
    cin:string,
    firstName:string,
    lastName:string,
    dateOfBirth:Date|null,
    email:string,
    phone:string,
    address:string,
    departementId?:number|null,
    departementSigle?:string

}