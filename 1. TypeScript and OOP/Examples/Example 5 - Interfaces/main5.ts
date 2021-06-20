let drawPoint = (a, b, c, d, e, x, y) => {
  // ...
};

let drawPoint2 = (point) => {
  //
};

// Will break at run time
drawPoint2({
  x: 1,
  y: 2,
});

// ---------------------------------------------------------------
// 1. Using in line annotations
let drawPoint3 = (point: { x: number; y: number }) => {
  // ...
};

// 2. Using Interfaces
interface Point {
  x: number;
  y: number;
}

let drawPoint4 = (point: Point) => {
  // ...
};
