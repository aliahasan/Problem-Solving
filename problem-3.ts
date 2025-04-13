//Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
  { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
];

const getBookTitles = (booksArray: Book[]): string[] => {
  return booksArray.map((book) => book.title);
};
const bookTitles = getBookTitles(books);
console.log(bookTitles);
