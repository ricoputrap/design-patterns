import EmployeeContractor from "./EmployeeContractor";
import EmployeeFullTime from "./EmployeeFullTime";
import EmployeePartTime from "./EmployeePartTime";

class EmployeeFactory {
  public static createEmployeeFullTime(
    id: number,
    name: string,
    salary: number,
    benefits: string[]
  ): EmployeeFullTime {
    return new EmployeeFullTime(id,name, salary, benefits);
  }

  public static createEmployeePartTime(
    id: number,
    name: string,
    hourlyRate: number,
    hoursWorked: number
  ): EmployeePartTime {
    return new EmployeePartTime(id,name, hourlyRate, hoursWorked);
  }

  public static createEmployeeContractor(
    id: number,
    name: string,
    hourlyRate: number,
    hoursWorked: number,
    contractDuration: number
  ): EmployeeContractor {
    return new EmployeeContractor(
      id,
      name,
      hourlyRate,
      hoursWorked,
      contractDuration
    );
  }
}

export default EmployeeFactory;