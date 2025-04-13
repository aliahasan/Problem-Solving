//Write a function that determines whether a given year is a leap year.
const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const year = 2024;
if (isLeapYear(year)) {
  console.log(`${year} is a leap year. Happy New Year `);
} else {
  console.log(`${year} is not a leap year. Happy New Year `);
}
