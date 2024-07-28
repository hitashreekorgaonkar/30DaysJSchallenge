// Recursion
// Basic Recursion
// 1
function factorial(n) {
  // Base case: if n is 0 or 1, the factorial is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n! = n * (n-1)!
  return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`); // Output: 120

// 2
function fibonacci(n) {
  // Base cases: if n is 0 or 1, return n
  if (n === 0 || n === 1) {
    return n;
  }
  // Recursive case: F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(`Fibonacci of 6: ${fibonacci(6)}`);

// Recursion with Arrays
// 1
function sumArray(arr, index = 0) {
  // Base case: if index is beyond the array length, return 0
  if (index >= arr.length) {
    return 0;
  }
  // Recursive case: return the current element plus the sum of the rest
  return arr[index] + sumArray(arr, index + 1);
}
console.log(`Sum of [1, 2, 3, 4, 5]: ${sumArray([1, 2, 3, 4, 5])}`); // Output: 15
console.log(`Sum of [10, -2, 3, 4, 5]: ${sumArray([10, -2, 3, 4, 5])}`); // Output: 20

// 2
function findMax(arr, index = 0, maxSoFar = -Infinity) {
  // Base case: if index is beyond the array length, return maxSoFar
  if (index >= arr.length) {
    return maxSoFar;
  }
  // Update maxSoFar if the current element is greater
  maxSoFar = arr[index] > maxSoFar ? arr[index] : maxSoFar;
  // Recursive case: move to the next element
  return findMax(arr, index + 1, maxSoFar);
}

// Test cases
console.log(`Max of [1, 2, 3, 4, 5]: ${findMax([1, 2, 3, 4, 5])}`); // Output: 5
console.log(`Max of [10, -2, 3, 4, 5]: ${findMax([10, -2, 3, 4, 5])}`); // Output: 10
console.log(`Max of [5]: ${findMax([5])}`); // Output: 5
console.log(`Max of []: ${findMax([])}`); // Output: -Infinity (or you can handle the empty array case differently)

// String Manipulation with Recursion
// 1
function reverseString(str) {
  // Base case: if the string is empty or a single character, return the string
  if (str.length <= 1) {
    return str;
  }
  // Recursive case: return the last character plus the reverse of the rest of the string
  return (
    str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1))
  );
}
console.log(`Reverse of 'hello': ${reverseString("hello")}`); // Output: 'olleh'

// 2
function isPalindrome(str) {
  // Base case: if the string is empty or has a single character, it's a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Recursive case: check if the first and last characters are the same
  // and the substring without the first and last characters is a palindrome
  if (str.charAt(0) === str.charAt(str.length - 1)) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  // If the first and last characters are not the same, it's not a palindrome
  return false;
}
console.log(`'racecar' is a palindrome: ${isPalindrome("racecar")}`); // Output: true
console.log(`'hello' is a palindrome: ${isPalindrome("hello")}`); // Output: false

// Recursive Search
// 1

// 2
function countOccurrences(arr, target, index = 0) {
  // Base case: if the index is beyond the array length, return 0
  if (index >= arr.length) {
    return 0;
  }
  // Check if the current element is the target, add 1 if it is, otherwise add 0
  const count = arr[index] === target ? 1 : 0;
  // Recursive case: add the current count to the result of the next call
  return count + countOccurrences(arr, target, index + 1);
}

// Test cases
const arr1 = [1, 2, 3, 4, 5, 2, 3, 2];
const arr2 = [10, 20, 30, 40, 50];
console.log(`Occurrences of 2 in [${arr1}]: ${countOccurrences(arr1, 2)}`);
