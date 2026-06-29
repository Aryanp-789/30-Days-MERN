// Creating an array
let fruits = ["Apple", "Banana", "Mango"];

// Accessing elements
console.log(fruits[0]);

// Add element
fruits.push("Orange");
console.log(fruits);

// Remove last element
fruits.pop();
console.log(fruits);

// Remove first element
fruits.shift();
console.log(fruits);

// Add at beginning
fruits.unshift("Grapes");
console.log(fruits);

// Check if element exists
console.log(fruits.includes("Mango"));

// Find index
console.log(fruits.indexOf("Banana"));

// Loop through array
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Map
let numbers = [1, 2, 3, 4, 5];
let square = numbers.map((num) => num * num);
console.log(square);

// Filter
let even = numbers.filter((num) => num % 2 === 0);
console.log(even);

// Find
console.log(numbers.find((num) => num > 3));

// Reduce
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
