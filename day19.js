// Regular Expressions

// Basic Regular Expressions
// 1
const text = "JavaScript is a versatile language. I enjoy learning JavaScript.";
const regex = /JavaScript/g;
const matches = text.match(regex);

if (matches) {
  matches.forEach((match, index) => {
    console.log(`Match ${index + 1}: ${match}`);
  });
} else {
  console.log("No matches found.");
}

// 2
const text2 = "There are 123 55 9 apples and 456 oranges.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);

if (matches2) {
  matches2.forEach((match, index) => {
    console.log(`Match ${index + 1}: ${match}`);
  });
} else {
  console.log("No matches found.");
}

// Character Classes and Quantifiers
// 1
const text3 =
  "JavaScript is a versatile language. I enjoy learning JavaScript and Python.";
const regex3 = /\b[A-Z][a-z]*[A-Z]?[a-z]*\b/g;
const matches3 = text3.match(regex3);

console.log(matches3);

// 2
// Above example // 2 Solution

// Grouping and Capturing
// 1
const phoneNumber = "(123) 456-7890";
const regex4 = /\((\d+)\)\s(\d+)-(\d+)/;

const match1 = phoneNumber.match(regex4);

if (match1) {
  const [fullMatch, areaCode, centralOfficeCode, lineNumber] = match1;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Area Code: ${areaCode}`);
  console.log(`Central Office Code: ${centralOfficeCode}`);
  console.log(`Line Number: ${lineNumber}`);
} else {
  console.log("No match found");
}

// 2
const email = "username@domain.com";
const regex5 = /([^@]+)@([^@]+\.[^@]+)/;

const match2 = email.match(regex5);

if (match2) {
  const [fullMatch, username, domain] = match2;
  console.log(`Full Match: ${fullMatch}`);
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No match found");
}

// Assertions and Boundaries
// 1
const text6 = "Hello, this is a test.";
const regex6 = /^\w+/;

const match6 = text6.match(regex6);

if (match6) {
  console.log(`Match: ${match6[0]}`);
} else {
  console.log("No match found");
}

const regex7 = /\b\w+\b[^\w]*$/;

const match7 = text6.match(regex7);

if (match7) {
  console.log(`Match: ${match7[0]}`);
} else {
  console.log("No match found");
}

//  Practical Applications
// 1
const password = "YourPassword123@";
const regex8 =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\[\]{};':"\\|,.<>\/?]).{8,}$/;

const isValid = regex8.test(password);

if (isValid) {
  console.log("Password is valid.");
} else {
  console.log("Password is not valid.");
}

// 2
const url = "https://www.example.com";
const regex9 = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?$/;

const isValid9 = regex9.test(url);

if (isValid9) {
  console.log("URL is valid.");
} else {
  console.log("URL is not valid.");
}
