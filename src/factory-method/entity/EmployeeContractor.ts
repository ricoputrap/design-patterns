import Employee from "./Employee";

class EmployeeContractor extends Employee {
  private hourlyRate: number;
  private hoursWorked: number;

  /** duration of the contract in months */
  private contractDuration: number;

  constructor(
    id: number,
    name: string,
    hourlyRate: number,
    hoursWorked: number,
    contractDuration: number
  ) {
    super(id, name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
    this.contractDuration = contractDuration;
  }

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked * this.contractDuration;
  }

  displayInfo(): string {
    return `
      Name: ${this.name}
      Hourly Rate: ${this.hourlyRate}
      Hours Worked: ${this.hoursWorked}
      Contract Duration: ${this.contractDuration}
    `
  }
}

export default EmployeeContractor