// Code to reverse a string

function reverseString(Str) {
  return Str.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// Function that counts the number of characters in a string

function countCharacters(Str) {
  return Str.length;
}
console.log(countCharacters("Hello"));

//Function that capitalizes the firs letter of every word in a sentence

function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ") //split the sentence into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) //capitalize each word
    .join(" ");
}
console.log(capitalizeFirstLetter("capitalize first letter of each word"));

// Function to find the minimum and maximum value in an array of numbers

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log(findMin([10, 20, 20, 40, 50, 60, 70, 80, 90, 100]));

// Function that calculates the sum of all elements in an array

function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Function that filters out elements from an array based on a given condition

function filterArray(arr, condition) {
  return arr.filter(condition); // Apply the given condition using filter
}

console.log(filterArray([1, 2, 3, 4, 5], (num) => num > 3)); // ➞ [4, 5]
console.log(filterArray(["apple", "banana", "cat"], (word) => word.length > 3)); // ➞ ["apple", "banana"]

// Function to calculate the factorial of a given number

function factorial(num) {
  if (num < 0) {
    return "Factorial is not defined for negative numbers"; // Handle negative inputs
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i; // Multiply result by the current number
  }
  return result;
}
console.log(factorial(5)); // ➞ 120

// Function to check if a number is prime or not

function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers <= 1 are not prime
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Found a divisor, not prime
    }
  }
  return true; // No divisors found, it's prime
}
console.log(isPrime(2)); // ➞ true

// Function to generate the Fibonacci sequence up to a given number of terms

function generateFibonacci(n) {
  let fibonacci = [];
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fibonacci.push(i); // First two terms are 0 and 1
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }
  return fibonacci;
}

console.log(generateFibonacci(6)); // [0, 1, 1, 2, 3, 5]
