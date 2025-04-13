// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers: number[] = [1, 2, 2, 3, 4, 4, 5, 6, 1, 7, 8, 5];

const getUniqueNumbers = (arr: number[]): number[] => {
  return [...new Set(arr)];
};

const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
