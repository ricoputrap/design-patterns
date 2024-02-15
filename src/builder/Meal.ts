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

  public getMainCourse(): string {
    return this.mainCourse;
  }

  public getSideDishes(): string[] {
    return this.sideDishes;
  }

  public getDrink(): string {
    return this.drink;
  }

  public getDessert(): string {
    return this.dessert;
  }

  public toString(): string {
    return `
    Main course: ${this.mainCourse}
    Side dishes: ${this.sideDishes.join(", ")}
    Drink: ${this.drink}
    Dessert: ${this.dessert}
    `;
  }
}