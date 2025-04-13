// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (x: number): number => x * x;

const double = (x: number): number => x * 2;

const addFive = (x: number): number => x + 5;

const ComposedFunc = (x: number): number => {
  const squared = square(x);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
};

const result = ComposedFunc(3);
console.log(result);
