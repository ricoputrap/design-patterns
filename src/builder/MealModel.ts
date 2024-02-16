import Meal from "./Meal";

export default class MealModel {
  private meals: Meal[];

  constructor() {
    this.meals = [];
  }

  public getMeals(): Meal[] {
    return this.meals;
  }

  public addMeal(meal: Meal) {
    this.meals.push(meal);
  }
}