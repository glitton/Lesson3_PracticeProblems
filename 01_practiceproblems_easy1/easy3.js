// Question #1:
// Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

numbers.length = 0;
numbers.splice(0, numbers.length);
while (numbers.length) {
  numbers.pop();
}

//for loop doesn't work cause numbers.length changes with every pop()
// for (let i = 0; i < numbers.length; i++) {
//   let newArray = numbers;
//   newArray.pop();
//   console.log(numbers);
// }

// Question #3: The + operator coerces the arrays to strings then concatenates them
// console.log([1, 2, 3] + [4, 5]); //1,2,34,5

// Question #3:
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
// console.log(str1);

// Question 4:
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
// console.log(arr1);

// Question 5:
// const isColorValid = (color) => color === "blue" || color === "green";
// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }
const isColorValid = (color) => ["blue", "green"].includes(color);
console.log(isColorValid("blue"));