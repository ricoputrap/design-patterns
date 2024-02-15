import rl from "../rl";
import Meal from "./Meal";
import MealBuilder from "./MealBuilder";

enum EnumMenuOptions {
  CUSTOMIZE_MEAL = "1",
  VIEW_DEFAULT_MENU = "2",
  COMPLETE_ORDER = "3"
}

const MAIN_COURSES = ["Grilled Chicken", "Steak", "Salmon", "Ketoprak", "Nasi Goreng"];
const SIDE_DISHES = ["Mashed Potato", "Steamed Vegetables", "Salad", "French Fries"];
const DRINKS = ["Iced Tea", "Iced Coffee", "Soda", "Water", "Juice"];
const DESSERTS = ["Cheesecake", "Ice Cream", "Cupcake", "Chocolate"];

const meals: Meal[] = [];

const mainMenu = () => {
  let msg = `
  Please select from the following options:

  1. Customize Your Meal
  2. View Default Menu
  `;

  if (meals.length > 0) {
    msg += "3. Complete Order\n";
    msg = `  You have choosen ${meals.length} meals to order.\n\n` + msg;
  }
  msg += "\n  Or type 'exit' to quit.\n";

  console.log(msg);
}

const customizeMeal = async () => {
  const builder = new MealBuilder();

  console.log("Option 1: Customize Your Meal\n");
  console.log("Please follow the prompts to customize your meal:\n");
  
  // Main Course
  console.log("Main course:");
  for (let i = 0; i < MAIN_COURSES.length; i++) {
    console.log(`${i + 1}. ${MAIN_COURSES[i]}`);
  }
  await promptMainCourse(builder);

  // Side Dishes
  console.log("\nSide Dishes:");
  for (let i = 0; i < SIDE_DISHES.length; i++) {
    console.log(`${i + 1}. ${SIDE_DISHES[i]}`);
  }
  await promptSideDishes(builder);

  const meal: Meal = builder.build();
  meals.push(meal);

  mainMenu();
  menu();
}

const promptMainCourse = (builder: MealBuilder) => {
  return new Promise<void>((resolve) => {
    rl.question("\nEnter your choice of main course: ", (answer) => {
      if (answer === "") {
        resolve();
        return;
      }
  
      if (!MAIN_COURSES.includes(answer)) {
        console.log("Doesn't exist! Please select from the list.\n");
        promptMainCourse(builder);
      }
      else {
        builder.setMainCourse(answer);
        resolve();
        return;
      }
    });
  })
}

const promptSideDishes = (builder: MealBuilder) => {
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

const completeOrder = () => {
  console.log("\nOption 3: Complete Order\n");
  console.log(`Here are ${meals.length} meal(s) you've ordered:\n`);

  for (let i = 0; i < meals.length; i++) {
    console.log(`Meal ${i + 1}:`);
    console.log(meals[i].toString());
  }

  console.log("\nThank you for using the Customizable Meal Builder!");
  rl.close();
}

const menu = () => {
  rl.question("Enter the number of your choice: ", answer => {
    if (answer === "exit") {
      console.log("\nThank you for using the Customizable Meal Builder!");
      rl.close();
      return;
    }

    switch (answer) {
      case EnumMenuOptions.CUSTOMIZE_MEAL:
        customizeMeal();
        break;
      case EnumMenuOptions.VIEW_DEFAULT_MENU:
        break;
      case EnumMenuOptions.COMPLETE_ORDER:
        completeOrder();
        break;
      default:
        break;
    }
  });
}

export const run = () => {
  console.log("Welcome to the Customizable Meal Builder!\n");
  mainMenu();
  menu();
}