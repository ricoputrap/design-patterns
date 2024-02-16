import rl from "../rl";
import Meal from "./Meal";
import MealBuilder from "./MealBuilder";
import MealModel from "./MealModel";
import MealView from "./MealView";
import { DESSERTS, DRINKS, EnumMenuOptions, MAIN_COURSES, SIDE_DISHES } from "./constants";

export default class MealController {
  private mealModel: MealModel;

  constructor() {
    this.mealModel = new MealModel();
  }

  public run() {
    console.log("Welcome to the Customizable Meal Builder!\n");
    this.mainMenu();
  }

  private mainMenu() {
    MealView.mainMenu(this.mealModel.getMeals().length);
    this.menu();
  }

  private completeOrder(): void {
    MealView.completeOrder(this.mealModel.getMeals());
    rl.close();
  }

  private menu() {
    rl.question("Enter the number of your choice: ", (answer) => {
      if (answer === "exit") {
        console.log("\nThank you for using the Customizable Meal Builder!");
        rl.close();
        
        return;
      }

      switch (answer) {
        case EnumMenuOptions.CUSTOMIZE_MEAL:
            this.customizeMeal();
            break;
        case EnumMenuOptions.VIEW_DEFAULT_MENU:
            // Handle option 2
            break;
        case EnumMenuOptions.COMPLETE_ORDER:
            this.completeOrder();
            break;
        default:
            // Handle invalid input
            break;
      }
    });
  }

  private async customizeMeal(): Promise<void> {
    const builder = new MealBuilder();

    console.log("Option 1: Customize Your Meal\n");
    console.log("Please follow the prompts to customize your meal:\n");

    // Main Course
    console.log("Main course:");
    for (let i = 0; i < MAIN_COURSES.length; i++) {
      console.log(`${i + 1}. ${MAIN_COURSES[i]}`);
    }
    await this.promptMainCourse(builder);

    // Side Dishes
    console.log("\nSide Dishes:");
    for (let i = 0; i < SIDE_DISHES.length; i++) {
      console.log(`${i + 1}. ${SIDE_DISHES[i]}`);
    }
    await this.promptSideDishes(builder);

    // Drink
    console.log("\nDrink:");
    for (let i = 0; i < DRINKS.length; i++) {
      console.log(`${i + 1}. ${DRINKS[i]}`);
    }
    await this.promptDrink(builder);

    // Dessert
    console.log("\nDessert:");
    for (let i = 0; i < DESSERTS.length; i++) {
      console.log(`${i + 1}. ${DESSERTS[i]}`);
    }
    await this.promptDessert(builder);

    const meal: Meal = builder.build();
    this.mealModel.addMeal(meal);

    this.mainMenu();
  }

  private promptMainCourse(builder: MealBuilder): Promise<void> {
    return new Promise<void>((resolve) => {
      rl.question("\nEnter your choice of main course: ", (answer) => {
        if (answer === "") {
          resolve();
          return;
        }
    
        if (!MAIN_COURSES.includes(answer)) {
          console.log("Doesn't exist! Please select from the list.\n");
          this.promptMainCourse(builder);
        }
        else {
          builder.setMainCourse(answer);
          resolve();
          return;
        }
      });
    })
  }

  private promptSideDishes(builder: MealBuilder): Promise<void> {
    return new Promise<void>((resolve) => {
      rl.question("\nEnter your choice of side dishes (comma-separated): ", answer => {
        if (answer === "") {
          resolve();
          return;
        }
    
        const sideDishes = answer.split(", ");
        sideDishes.forEach((dish: string) => {
          if (SIDE_DISHES.includes(dish)) {
            builder.addSideDish(dish);
          }
        });
  
        resolve();
      });
    })
  }

  private promptDrink(builder: MealBuilder): Promise<void> {
    return new Promise<void>((resolve) => {
      rl.question("\nEnter your choice of drink: ", (answer) => {
        if (answer === "") {
          resolve();
          return;
        }
    
        if (!DRINKS.includes(answer)) {
          console.log("Doesn't exist! Please select from the list.\n");
          this.promptDrink(builder);
        }
        else {
          builder.setDrink(answer);
          resolve();
          return;
        }
      });
    });
  }

  private promptDessert(builder: MealBuilder): Promise<void> {
    return new Promise<void>((resolve) => {
      rl.question("\nEnter your choice of dessert: ", (answer) => {
        if (answer === "") {
          resolve();
          return;
        }
    
        if (!DESSERTS.includes(answer)) {
          console.log("Doesn't exist! Please select from the list.\n");
          this.promptDessert(builder);
        }
        else {
          builder.setDessert(answer);
          resolve();
          return;
        }
      });
    });
  }
}