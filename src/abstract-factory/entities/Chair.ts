class Chair {
  private type: string;
  private color: string;
  private material: string;

  constructor(type: string, color: string, material: string) {
    this.type = type;
    this.color = color;
    this.material = material;
  }

  public getType(): string {
    return this.type;
  }

  public getColor(): string {
    return this.color;
  }

  public getMaterial(): string {
    return this.material;
  }
}