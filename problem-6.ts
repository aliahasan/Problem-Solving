//Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumOfEvenNumbers = (arr: number[]): number => {
  const sum = arr.reduce((acc, number) => {
    if (number % 2 === 0) {
      return acc + number;
    } else {
      return acc;
    }
  }, 0);
  return sum;
};

const result = sumOfEvenNumbers(numbers);
console.log(result);
