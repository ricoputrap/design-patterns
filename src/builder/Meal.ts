export default class Meal {
  private mainCourse: string;
  private sideDishes: string[];
  private drink: string;
  private dessert: string;

  constructor(mainCourse: string, sideDishes: string[], drink: string, dessert: string) {
    this.mainCourse = mainCourse;
    this.sideDishes = sideDishes;
    this.drink = drink;
    this.dessert = dessert;
  }

  public toString(): string {
    return `
    Main course: ${this.mainCourse || "-"}
    Side dishes: ${this.sideDishes.join(", ")  || "-"}
    Drink: ${this.drink  || "-"}
    Dessert: ${this.dessert  || "-"}
    `;
  }
}