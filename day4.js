// For Loops
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(i + " * 5 = ", i * 5);
}

// While Loop
let sum = 0;
let i = 1;
while (i < 11) {
  sum += i;
  i++;
}
console.log(sum);

let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Do While Loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

let num = 5;
let fact = 1;
let m = 1;
do {
  fact *= m;
  m++;
} while (m <= num);
console.log(fact);

// Nested Loops
let rows = 5;
let stars = "";

for (let i = 1; i <= rows; i++) {
  let stars = " ";
  for (let j = 1; j <= i; j++) {
    stars += "* ";
  }
  console.log(stars);
}

// Loop Control Statements
for (let p = 1; p <= 10; p++) {
  if (p == 5) continue;
  console.log(p);
}

for (let p = 1; p <= 10; p++) {
  if (p == 7) break;
  console.log(p);
}
