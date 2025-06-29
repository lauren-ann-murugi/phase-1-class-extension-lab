// Base class for all polygons
class Polygon {
  // Accepts an array of side lengths (e.g., [5, 5, 5])
  constructor(sides) {
    this.sides = sides; // Store the sides
  }

  // Getter to count the number of sides
  get countSides() {
    return this.sides.length;
  }

  // Getter to calculate the perimeter by summing all sides
  get perimeter() {
    return this.sides.reduce((total, side) => total + side, 0);
  }
}

// Triangle class inherits from Polygon
class Triangle extends Polygon {
  // Getter to check if the triangle is valid
  get isValid() {
    // Must have exactly 3 sides
    if (this.countSides !== 3) return false;

    const [a, b, c] = this.sides;
    // Check triangle inequality rule
    return (a + b > c) && (a + c > b) && (b + c > a);
  }
}

// Square class inherits from Polygon
class Square extends Polygon {
  // Getter to check if the square is valid
  get isValid() {
    // Must have exactly 4 sides and all sides must be equal
    if (this.countSides !== 4) return false;

    return this.sides.every(side => side === this.sides[0]);
  }

  // Getter to calculate the area of the square (side^2)
  get area() {
    // Assumes it's a valid square with equal sides
    return this.sides[0] ** 2;
  }
}
