# Abstract Factory

While the Factory Method is explaining about a factory for creating products/items, the Abstract Factory is explaining about a factory for creating factories.

## Problem: Furniture Store Management

Create a CLI (Command Line Interface) application for a furniture store management system. This application will allow the store manager to manage the inventory of chairs and tables, including adding new furniture items, listing available items, and generating reports.

### Key Features:

- [ ] 1. **Main Menu**
  Upon launching the application, the user should be presented with a main menu displaying the following options:
  1. Add Furniture
  2. List Furniture
  3. Generate Report
  4. Exit
  
  ```
  Furniture Store Management System
  1. Add Furniture
  2. List Furniture
  3. Generate Report
  4. Exit

  ```

- [ ] 2. **Add Furniture**
  When the user selects the "Add Furniture" option:
  - The application should prompt the user to enter the style of furniture they want to add (modern or victorian).
  - Depending on the selected style, the user should be prompted to enter details for the furniture items, such as chair and table.
  - After entering the details, the application should add the furniture items to the inventory
  
  ```
  Add Furniture
  Please enter the style of furniture (modern/victorian): modern

  Adding Modern Furniture
  -----------------------
  Please enter details for the chair:
  1. Chair Type (Dining Chair, Armchair, Lounge Chair): 
  2. Chair Color (Black, White, Brown, Gray, Blue, Red): 
  3. Chair Material (Wood, Plastic, Metal, Fabric, Leather):

  Please enter details for the table:
  1. Table Type (Dining Table, Coffee Table, Side Table):
  2. Table Color (Black, White, Brown, Gray, Natural Wood, Glass): 
  3. Table Material Wood, Metal, Glass, Marble: 
  ```

- [ ] 3. **List Furniture**
  When the user selects the "List Furniture" option:
  - The application should display a list of available furniture items in the inventory.
  - The list should include details such as the style (modern or victorian), type (chair or table), and any other relevant information

  ```
  List Furniture
  -------------------
  Available Furniture
  -------------------
  1. Modern Dining Chair (Black, Wood)
  2. Modern Coffee Table (White, Metal)
  3. Victorian Armchair (Brown, Fabric)
  4. Victorian Side Table (Natural Wood, Glass)
  5. Modern Lounge Chair (Gray, Leather)
  ```


- [ ] 4. **Generate Report**
  When the user selects the "Generate Report" option:
  - The application should generate a report summarizing the inventory of furniture items.
  - The report could include information such as the total number of furniture items, breakdown by style and type, and any other relevant metrics

  ```
  Generate Report
  ----------------
  Inventory Summary
  ----------------
  Total Furniture Items: 5
  Modern Furniture: 3
  Victorian Furniture: 2
  ```

- [ ] 5. **Exit**