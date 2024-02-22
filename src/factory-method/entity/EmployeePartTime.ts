import Employee from "./Employee";

class EmployeePartTime extends Employee {
  private hourlyRate: number;
  private hoursWorked: number;

  constructor(id: number, name: string, hourlyRate: number, hoursWorked: number) {
    super(id, name);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay(): number {
    return this.hourlyRate * this.hoursWorked;
  }

  displayInfo(): string {
    return `
      Name: ${this.name}
      Hourly Rate: ${this.hourlyRate}
      Hours Worked: ${this.hoursWorked}
    `
  }
}

export default EmployeePartTime;