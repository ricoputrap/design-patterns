abstract class Employee {
  protected id: number;
  protected name: string;
  protected isActive: boolean;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.isActive = true;
  }

  abstract calculatePay(): number;
  abstract displayInfo(): string;

  public getId(): number {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public setIsActive(isActive: boolean) {
    this.isActive = isActive;
  }
}

export default Employee;