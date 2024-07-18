// Array creation and access
arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
console.log(arr1[0], arr1[arr1.length - 1]);

// Array Methods (Basic)
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(1);
console.log(arr1);

// Array Methods (Intermediate)
let arrMap = arr1.map((n) => n + n);
console.log(arrMap);

let arrFilter = arr1.filter((n) => n % 2 == 0);
console.log(arrFilter);

let arrReduce = arr1.reduce(
  (accumulator, currentValue) => (accumulator += currentValue),
  0
);
console.log(arrReduce);

// Array Iteration
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
arr1.forEach((n) => console.log(n));

// Multi-dimensional Iteration
let arr2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log("arr2", arr2);
console.log(arr2[1][1]);
