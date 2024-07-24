// Error Handling

// Basic Error Handling with Try-Catch
// 1
// Function that intentionally throws an error
function intentionallyThrowError() {
  throw new Error("This is an intentional error");
}

// Function to demonstrate error handling
function demoErrorHandling() {
  try {
    // Call the function that throws an error
    intentionallyThrowError();
  } catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
  }
}

// Execute the demo function
demoErrorHandling();

// 2
// Function to divide two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

// Function to demonstrate error handling
function demoDivision(a, b) {
  try {
    // Attempt to divide the numbers
    let result = divide(a, b);
    console.log(`The result of dividing ${a} by ${b} is ${result}`);
  } catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
  }
}

// Test the function
demoDivision(10, 2); // Should log: The result of dividing 10 by 2 is 5
demoDivision(10, 0); // Should log: An error occurred: Division by zero is not allowed

// Finally Block
// 1
// Function that intentionally throws an error
function intentionallyThrowError() {
  throw new Error("This is an intentional error");
}

// Function to demonstrate try-catch-finally flow
function demoTryCatchFinally() {
  try {
    console.log("Inside try block");
    // Call the function that throws an error
    intentionallyThrowError();
    console.log("This will not be logged");
  } catch (error) {
    console.log("Inside catch block");
    console.error("An error occurred:", error.message);
  } finally {
    console.log("Inside finally block");
  }
}

// Execute the demo function
demoTryCatchFinally();

// Custom Error Objcts
// 1
// Step 1: Define a custom error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// Step 2: Function that throws the custom error
function riskyFunction() {
  throw new CustomError("Something went wrong in riskyFunction!");
}

// Step 3: Handle the custom error using try-catch block
try {
  riskyFunction();
} catch (e) {
  if (e instanceof CustomError) {
    console.log(`Caught an error: ${e.message}`);
  } else {
    console.log(`Unexpected error: ${e}`);
  }
}

// 2
// Define a custom error class for validation errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Function that validates user input
function validateUserInput(input) {
  if (typeof input !== "string" || input.trim() === "") {
    throw new ValidationError("Input must be a non-empty string");
  }
  return input;
}

// Function to demonstrate error handling
function demoValidation(input) {
  try {
    console.log("Validating user input...");
    // Call the function that validates the input
    let validatedInput = validateUserInput(input);
    console.log("Valid input:", validatedInput);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log("Inside catch block for ValidationError");
      console.error("ValidationError:", error.message);
    } else {
      console.log("Inside catch block for other errors");
      console.error("An error occurred:", error.message);
    }
  } finally {
    console.log("Validation process completed");
  }
}

// Test the function with various inputs
demoValidation("Hello, world!"); // Should log: Valid input: Hello, world!
demoValidation(""); // Should log: ValidationError: Input must be a non-empty string
demoValidation("   "); // Should log: ValidationError: Input must be a non-empty string
demoValidation(123); // Should log: ValidationError: Input must be a non-empty string

// Error Handling in Promises
// 1
// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
    // Randomly decide whether to resolve or reject
    const isSuccess = Math.random() >= 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("The promise was resolved successfully!");
      } else {
        reject(new Error("The promise was rejected."));
      }
    }, 1000); // Simulate async operation with a 1 second delay
  });
}

// Execute the randomPromise function and handle the result
randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("An error occurred:", error.message);
  });

// 2
// Function that returns a promise which randomly resolves or rejects
function randomPromise() {
  return new Promise((resolve, reject) => {
    // Randomly decide whether to resolve or reject
    const isSuccess = Math.random() >= 0.5;

    setTimeout(() => {
      if (isSuccess) {
        resolve("The promise was resolved successfully!");
      } else {
        reject(new Error("The promise was rejected."));
      }
    }, 1000); // Simulate async operation with a 1 second delay
  });
}

// Async function to handle the promise
async function handleRandomPromise() {
  try {
    const message = await randomPromise();
    console.log(message);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// Execute the async function
handleRandomPromise();

// Gracefull Error Handling in Fetch
// 1
// Function to fetch data from an invalid URL
function fetchData() {
  const invalidUrl = "https://invalid-url.com/data";

  fetch(invalidUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("An error occurred:", error.message);
    });
}

// Execute the function
fetchData();

// 2
// Async function to fetch data from an invalid URL
async function fetchData() {
  const invalidUrl = "https://invalid-url.com/data";

  try {
    const response = await fetch(invalidUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    console.error("B2 An error occurred:", error.message);
  }
}

// Execute the async function
fetchData();
