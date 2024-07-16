// If else

let num1 = 5;
if (num1 > 0) {
  console.log("Number is Positive");
} else if (num1 < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}

let age = 18;

if (age >= 18) {
  console.log("You can Vote!");
} else {
  console.log("You can't vote");
}

// nested if-else statements

let n1 = 5;
let n2 = 15;
let n3 = 7;

if (n1 > n2) {
  if (n1 > n3) {
    console.log(n1, " is Large");
  } else {
    console.log(n3, " is Large");
  }
} else {
  if (n2 > n3) {
    console.log(n2, " is Large");
  } else {
    console.log(n3, " is Large");
  }
}

// switch case

let day = 2;
switch (day) {
  case 1:
    console.log("It's Monday");
    break;
  case 2:
    console.log("It's Tuesday");
    break;
  default:
    console.log("Not a day");
    break;
}

let score = 77;

switch (true) {
  case score >= 90:
    console.log("A+");
    break;
  case score >= 70:
    console.log("A");
    break;
  case score >= 60:
    console.log("B");
    break;
  case score >= 35:
    console.log("D");
    break;
  case score >= 0:
    console.log("F");
    break;
  default:
    console.log("Not a Score");
    break;
}

// Conditional (Ternary) Operator
let ans = score % 2 == 0 ? `${score} is Even` : `${score} is Odd`;
console.log(ans);

// Combining Conditions
let year = 2025;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "Leap Year");
} else {
  console.log(year, "Not a Leap Year");
}
