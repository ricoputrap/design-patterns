import Employee from "./entity/Employee";

export default class EmployeeModel {
  private employees: Employee[];
  
  constructor() {
    this.employees = [];
  }

  public getEmployees(): Employee[] {
    return this.employees;
  }

  public addEmployee(employee: Employee) {
    this.employees.push(employee);
  }

  public removeEmployee(employee: Employee) {
    this.employees = this.employees.filter((e) => e.getId() !== employee.getId());
  }

  public updateEmployee(employee: Employee) {
    const index = this.employees.findIndex((e) => e.getId() === employee.getId());
    this.employees[index] = employee;
  }

  public getEmployeeById(id: number): Employee | undefined {
    return this.employees.find((e) => e.getId() === id);
  }
}