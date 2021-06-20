// Groups variables (properties) and functions (methods) that are highly related.
class Point {
  x: number;
  y: number;

  draw() {
    console.log("X: " + this.x + ",Y: " + this.y);
  }

  getDistance(another: Point) {
    // ...
  }
}

// Class impementation -> Object
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

// Constructor
class Point2 {
  x: number;
  y: number;

  constructor(x: number = 0, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log("X: " + this.x + ",Y: " + this.y);
  }

  getDistance(another: Point) {
    // ...
  }
}

let point2 = new Point2();
