export default class EmployeeView {

  public static mainMenu(): void {
    let msg = `
    Please select from the following options:
    1. Create a new employee
    2. View employee information
    3. Edit employee information
    4. Delete an employee
    5. Calculate employee payroll
    6. Generate employee reports

    Or type 'exit' to quit.

    `;
    console.log(msg);
  }
}