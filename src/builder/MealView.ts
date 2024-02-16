import Meal from "./Meal";

export default class MealView {

  public static mainMenu(mealsCount: number) {
    let msg = `
    Please select from the following options:

    1. Customize Your Meal
    2. View Default Menu
    `;

    if (mealsCount > 0) {
      msg += "3. Complete Order\n";
      msg = `  You have choosen ${mealsCount} meals to order.\n\n` + msg;
    }
    msg += "\n  Or type 'exit' to quit.\n";

    console.log(msg);
  }

  public static completeOrder(meals: Meal[]) {
    console.log("\nOption 3: Complete Order\n");
    console.log(`Here are ${meals.length} meal(s) you've ordered:\n`);

    for (let i = 0; i < meals.length; i++) {
      console.log(`Meal ${i + 1}:`);
      console.log(meals[i].toString());
    }

    console.log("\nThank you for using the Customizable Meal Builder!");
  }
}