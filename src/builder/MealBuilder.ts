import Meal from "./Meal";

class MealBuilder {
  private mainCourse: string = "";
  private sideDishes: string[] = [];
  private drink: string = "";
  private dessert: string = "";
  
  public build(): Meal {
    return new Meal(
      this.mainCourse,
      this.sideDishes,
      this.drink,
      this.dessert
    );
  }

  public setMainCourse(mainCourse: string): MealBuilder {
    this.mainCourse = mainCourse;
    return this;
  }

  public addSideDish(sideDish: string): MealBuilder {
    this.sideDishes.push(sideDish);
    return this;
  }

  public setDrink(drink: string): MealBuilder {
    this.drink = drink;
    return this;
  }

  public setDessert(dessert: string): MealBuilder {
    this.dessert = dessert;
    return this;
  }
}

export default MealBuilder;