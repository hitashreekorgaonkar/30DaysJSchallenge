// Objects Creation and Access
let book = { title: "Peace", author: "H", year: 2024 };
console.log(book);
console.log(book.title, book.author);

// Objects Methods
book.getTitleAndAuthor = () => {
  let val = `${book.title} ${book.author}`;
  return val;
};
console.log("getTitleAndAuthor", book.getTitleAndAuthor());
book.updateYear = (year) => {
  return (book.year = year);
  // this.year = year; will not work in arrow function but it work with function()
};
book.updateYear(2025);
console.log("updateYear", book.year);

// Nested Objects
let library = {
  name: "City Library",
  books: [
    { title: "Peace", author: "H", year: 2024 },
    { title: "Happiness", author: "H", year: 2023 },
  ],
};
console.log(library.name);
library.books.forEach((element) => console.log(element.title));

// The this Keyword
// book.getTitleAndYear =  () => {
book.getTitleAndYear = function () {
  return `${this.title} ${this.year}`;
  // this.year this.title work here but will not work in arrow function
  // undefined undefined - will be the result for arrow function
};
console.log("getTitleAndYear", book.getTitleAndYear());

// Object Iteration
for (const key in book) {
  let results = [];
  console.log("Object Iteration", key, book[key]);
  if (typeof book[key] === "function") {
    results.push(book[key](2026));
    // updateYear works bcz of return else [undefined]
    console.log("res", results);
  }
}

const bookKeys = Object.keys(book);
console.log(bookKeys);

const bookValues = Object.values(book);
console.log(bookValues);

console.log(Object.entries(book));
