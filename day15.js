// Understanding Closures
// 1
// Outer function
function outerFunction() {
  // Variable in the outer function's scope
  let outerVariable = "Hello, World!";

  // Inner function
  function innerFunction() {
    // Accessing the variable from the outer function's scope
    return outerVariable;
  }

  // Returning the inner function
  return innerFunction;
}

// Calling the outer function to get the inner function
const myInnerFunction = outerFunction();

// Calling the inner function and logging the result
console.log(myInnerFunction());

// 2
// Function to create the closure
function createCounter() {
  // Private counter variable
  let counter = 0;

  // Function to increment the counter
  function increment() {
    counter++;
  }

  // Function to get the current value of the counter
  function getValue() {
    return counter;
  }

  // Returning an object with the increment and getValue functions
  return {
    increment,
    getValue,
  };
}

// Creating the counter closure
const counter = createCounter();

// Using the counter
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

counter.increment();
console.log(counter.getValue()); // Output: 3

// Practical Closures
// 1
function createIDGenerator() {
  // Private variable to keep track of the last generated ID
  let lastID = 0;

  // Function to generate a new unique ID
  function generateID() {
    lastID++;
    return lastID;
  }

  // Returning the generateID function
  return generateID;
}

// Creating an ID generator
const generateUniqueID = createIDGenerator();

// Generating unique IDs
console.log(generateUniqueID()); // Output: 1
console.log(generateUniqueID()); // Output: 2
console.log(generateUniqueID()); // Output: 3

// Generating more unique IDs
console.log(generateUniqueID()); // Output: 4
console.log(generateUniqueID()); // Output: 5

// 2
// Function to create the greeting closure
function createGreeting(name) {
  // Inner function to greet the user
  function greet() {
    return `Hello, ${name}!`;
  }

  // Returning the greet function
  return greet;
}

// Creating a greeting function for a specific user
const greetJohn = createGreeting("John");
const greetJane = createGreeting("Jane");

// Using the greeting functions
console.log(greetJohn()); // Output: Hello, John!
console.log(greetJane()); // Output: Hello, Jane!

// Closures in Loops
// 1
// Array to hold the functions
const functionArray = [];

// Loop to create functions and store them in the array
for (let i = 0; i < 10; i++) {
  // Using an IIFE to create a closure for each function
  functionArray[i] = (function (index) {
    return function () {
      console.log(index);
    };
  })(i);
}

// Testing the functions
functionArray[0](); // Output: 0
functionArray[1](); // Output: 1
functionArray[2](); // Output: 2
functionArray[3](); // Output: 3
// ...and so on

// Module Pattern
// 1
// Function to create the collection module
function createCollectionModule() {
  // Private array to hold the items
  let items = [];

  // Method to add an item to the collection
  function addItem(item) {
    items.push(item);
  }

  // Method to remove an item from the collection
  function removeItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
    } else {
      console.log(`${item} not found in the collection.`);
    }
  }

  // Method to list all items in the collection
  function listItems() {
    return items.slice(); // Return a copy of the items array
  }

  // Returning an object with the module's methods
  return {
    addItem,
    removeItem,
    listItems,
  };
}

// Creating an instance of the collection module
const myCollection = createCollectionModule();

// Using the collection module
myCollection.addItem("Apple");
myCollection.addItem("Banana");
console.log(myCollection.listItems()); // Output: ['Apple', 'Banana']

myCollection.removeItem("Apple");
console.log(myCollection.listItems()); // Output: ['Banana']

myCollection.removeItem("Orange"); // Output: Orange not found in the collection.

// Memoization
// 1
// Function to create a memoized version of another function
function memoize(fn) {
  // Private object to store cached results
  const cache = {};

  // Return a new function that uses the cache
  return function (...args) {
    // Create a unique key based on the function arguments
    const key = JSON.stringify(args);

    // Check if the result is already cached
    if (cache.hasOwnProperty(key)) {
      console.log("Returning cached result for:", key);
      return cache[key];
    }

    // Compute the result and store it in the cache
    const result = fn(...args);
    cache[key] = result;

    console.log("Computing result for:", key);
    return result;
  };
}

// Example function to be memoized
function add(a, b) {
  return a + b;
}

// Creating a memoized version of the add function
const memoizedAdd = memoize(add);

// Using the memoized function
console.log(memoizedAdd(2, 3)); // Output: Computing result for: [2,3] \n 5
console.log(memoizedAdd(2, 3)); // Output: Returning cached result for: [2,3] \n 5
console.log(memoizedAdd(5, 7)); // Output: Computing result for: [5,7] \n 12
console.log(memoizedAdd(5, 7)); // Output: Returning cached result for: [5,7] \n 12

// 2
// Memoization function
function memoize2(fn) {
  const cache = {}; // Private cache object to store results

  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key based on arguments

    if (cache.hasOwnProperty(key)) {
      console.log("Returning cached result for:", key);
      return cache[key];
    }

    const result = fn(...args); // Compute the result
    cache[key] = result; // Store the result in cache

    console.log("Computing result for:", key);
    return result;
  };
}

// Factorial function to be memoized
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// Create a memoized version of the factorial function
const memoizedFactorial = memoize2(factorial);

// Using the memoized factorial function
console.log(memoizedFactorial(5)); // Output: Computing result for: [5] \n 120
console.log(memoizedFactorial(5)); // Output: Returning cached result for: [5] \n 120
console.log(memoizedFactorial(6)); // Output: Computing result for: [6] \n 720
console.log(memoizedFactorial(6)); // Output: Returning cached result for: [6] \n 720
