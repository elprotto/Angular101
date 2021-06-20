export class Point {
  constructor(private _x?: number, private y?: number) {}

  draw() {
    // ...
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0) throw new Error("Value cannot be less than 0.");
    this._x = value;
  }
}
