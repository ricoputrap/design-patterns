import rl from "../rl";
import EmployeeView from "./EmployeeView";
import { EnumMenuOptions } from "./constants";

export default class EmployeeController {

  constructor() {}

  public run() {
    console.log("Welcome to the Employee Management System!\n");
    this.mainMenu();
  }

  private mainMenu() {
    EmployeeView.mainMenu();
    this.menu();
  }

  private menu() {
    rl.question("Enter the number of your choice: ", (answer) => {
      if (answer === "exit") {
        console.log("\nThank you for using the Employee Management System!");
        rl.close();
        
        return;
      }

      switch (answer) {
        case EnumMenuOptions.CREATE_EMPLOYEE:
          break;

        case EnumMenuOptions.VIEW_EMPLOYEES:
          break;

        case EnumMenuOptions.EDIT_EMPLOYEE:
          break;

        case EnumMenuOptions.DELETE_EMPLOYEE:
          break;

        case EnumMenuOptions.CALCULATE_PAYROLL:
          break;

        case EnumMenuOptions.GENERATE_REPORTS:
          break;

        default:
          console.log("\n==================================")
          console.log("Invalid input. Please try again.\n");
          this.mainMenu();
          break;
      }
    });
  }

  private async createEmployee(): Promise<void> {
    
  }
}