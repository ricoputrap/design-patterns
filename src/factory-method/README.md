# Factory Method

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created.

## Problem: Employee Management CLI App

This is a command-line interface (CLI) application designed to facilitate the management of employee information within an organization. The application provides various features for creating, viewing, editing, and deleting employee records, as well as performing payroll calculations and generating reports.

### Key Features:

- [ ] 1. **Employee Creation**: Users can create new employees by providing relevant details such as employee type, name, and ID.
- [ ] 2. **Employee Information Display**: Users can view detailed information about existing employees, including their name, ID, and specific attributes based on their employee type.
- [ ] 3. **Employee Editing**: Users can edit the details of existing employees, such as their name, ID, and specific attributes.
- [ ] 4. **Employee Deletion**: Users can delete existing employees from the system.
- [ ] 5. **Employee Payroll Calculation**: Users can calculate payroll for individual employees based on their employee type and specific attributes.
- [ ] 6. **Employee Report Generation**: Users can generate customizable reports summarizing employee information, payroll details, and employment status.
- [ ] 7. **Error Handling and Validation**: The application handles errors gracefully and provides informative messages in case of invalid input or failed operations.
- [ ] 8. **User-Friendly Interface**: The CLI interface is intuitive and user-friendly, guiding users through the various operations with clear prompts and instructions.

### User Terminal Interfaces

#### 1. Main Menu
```
Welcome to the Employee Management System!

Please select an option:
1. Create a new employee
2. View employee information
3. Edit employee information
4. Delete an employee
5. Calculate employee payroll
6. Generate employee reports
7. Exit

Enter your choice:
```

#### 2. Employee Creation
```
Please enter the employee details to create a new employee:
Enter the employee type (full-time/part-time/contractor):
Enter the employee name:
Enter the employee ID:
```

#### 3. Employee Information Display
```
Please enter the employee ID to view employee information:
Enter the employee ID:
```

#### 4. Employee Editing
```
Please enter the employee ID to edit employee information:
Enter the employee ID:
Select the attribute you want to edit:
Enter the new value for the selected attribute:
```

#### 5. Employee Deletion
```
Please enter the employee ID to delete the employee:
Enter the employee ID:
Are you sure you want to delete this employee? (yes/no):
```

#### 6. Employee Payroll Calculation
```
Please enter the employee ID to calculate payroll:
Enter the employee ID:
```

#### 7. Employee Report Generation
```
Please select the type of report you want to generate:
1. Employee details report
2. Payroll summary report
3. Employment status report

Enter your choice:
```

#### 8. Error Handling and Validation
```
Invalid input. Please try again.
Employee not found. Please enter a valid employee ID.
An error occurred while processing your request. Please try again later.
```

### Various Types of Employee

#### 1. Full-Time Employee

- **Attributes**
  - **Salary**: Represents the fixed monthly salary of the employee.
  - **Benefits**: Includes benefits such as health insurance, retirement plans, and paid time off.
  
- **Behaviors**
  - **Calculate Pay**: The pay for a full-time employee is calculated based on their monthly salary.
  - **Display Info**: Display the employee's name, employee ID, salary, and benefits.

#### 2. Part-Time Employee

- **Attributes**
  - **Hourly Rate**: Represents the rate at which the employee is paid per hour of work.
  - **Hours Worked**: Tracks the number of hours the employee has worked during the pay period.
  
- **Behaviors**
  - **Calculate Pay**: The pay for a part-time employee is calculated by multiplying the hourly rate by the number of hours worked.
  - **Display Info**: Display the employee's name, employee ID, hourly rate, and total hours worked.

#### 3. Contractor

- **Attributes**
  - **Hourly Rate**: Represents the rate at which the contractor is paid per hour of work.
  - **Contract Duration**: Specifies the duration of the contract in months.
  
- **Behaviors**
  - **Calculate Pay**: The pay for a contractor is calculated by multiplying the hourly rate by the number of hours worked during the contract duration.
  - **Display Info**: Display the contractor's name, contractor ID, hourly rate, and contract duration.
