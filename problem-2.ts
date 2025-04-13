//Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const people: Person[] = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 27, gender: "female" },
  { name: "Ethan", age: 35, gender: "male" },
];
const getAllMalePerson = (persons: Person[]): string[] => {
  const males = persons.filter((person) => person.gender !== "female");
  const malesName = males.map((person) => person.name);
  return malesName;
};

const maleNames = getAllMalePerson(people);
console.log(maleNames);
