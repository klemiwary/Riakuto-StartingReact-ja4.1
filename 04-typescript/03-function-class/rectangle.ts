class Rectangle {
  readonly name = 'rectangle';
  sideA: number;
  sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea = () => this.sideA * this.sideB;
}

const rect = new Rectangle(10, 20);
console.log(rect.getArea());
