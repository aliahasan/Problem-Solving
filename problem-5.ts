//Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

type TPerson = {
  name: string;
  age: number;
  gender: string;
};

const peoples: TPerson[] = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
];

const updatePersonAge = (
  arr: TPerson[],
  name: string,
  newAge: number
): void => {
  const person = arr.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  } else {
    console.log(`{Person with the "${name}"not found}`);
  }
};

const updatedResult = updatePersonAge(peoples, "Alice", 35);
console.log(updatedResult);
