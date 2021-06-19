let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a", false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}
let background = Color.Blue;

// Type Assertions
let message2;
message2 = "abc";
let endWithC = (<string>message2).endsWith("c");
let alternativeAssertion = (message2 as string).endsWith("c");
