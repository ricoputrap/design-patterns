import Employee from "./Employee";

class EmployeeFullTime extends Employee {
  private salary: number;
  private benefits: string[];

  constructor(
    id: number,
    name: string,
    salary: number,
    benefits: string[],
  ) {
    super(id, name);
    this.salary = salary;
    this.benefits = benefits;
  }
  
  calculatePay(): number {
    return this.salary;
  }
  
  displayInfo(): string {
    return `
      Name: ${this.name}
      Salary: ${this.salary}
      Benefits: ${this.benefits.join(", ")}
    `
  }
}

export default EmployeeFullTime;