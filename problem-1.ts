//Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview

type Item = {
  quantity: number;
  price: number;
};

const items: Item[] = [
  { quantity: 3, price: 10 },
  { quantity: 5, price: 15 },
  { quantity: 2, price: 20 },
];

const calculateTotalValue = (arr: Item[]): number => {
  const result = arr.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  return result;
};

const totalValue = calculateTotalValue(items);
console.log(totalValue);
