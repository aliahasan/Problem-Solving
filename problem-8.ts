//Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

// Define the car type
type Car = {
  make: string;
  model: string;
  year: number;
};

// Create an array of car objects
const cars: Car[] = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Honda", model: "Civic", year: 2015 },
  { make: "Ford", model: "Focus", year: 2020 },
  { make: "BMW", model: "X5", year: 2016 },
];

const sortCarsByYear = (carsArray: Car[]): Car[] => {
  return carsArray.sort((a, b) => a.year - b.year);
};

const sortedCars = sortCarsByYear(cars);
console.log("Sorted cars by year", sortedCars);
