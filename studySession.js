// Analyze the output of the following code.
// Discuss how JavaScript treats arrays when passed to functions and the concept of references. -- Generosa

const numbers = [1, 2, 3];

function modifyArray(arr) {
  arr.push(4);
  arr = [5, 6, 7]; // Is this a different array pass by reference?
  arr.push(8); // doesn't return any value
}

modifyArray(numbers); //function is invoked and now modifies the numbers array
// console.log(numbers); // this outputs the numbers array with the value 4 added at the end

// Examine the following code snippet. What will be logged to the console, and why?
// Highlight the use of logical operators and conditional execution in JavaScript. -- Mohamed

// let status = "online";
// let mode = status === "offline" || "online";

// if (mode === "online") {
//   console.log("System is online");
// } else {
//   console.log("System is offline");
// }

// What will be logged to the console and why? -- Will

const original = {
  a: 1,
  b: { c: 2 },
};

const shallowCopy = { ...original };
shallowCopy.a = 10;
shallowCopy.b.c = 20;

/*
console.log(original.a, original.b.c); // primitive doesn't change,
changes the key value pair of the object only
console.log(shallowCopy.a, shallowCopy.b.c); 
*/

let greeting = "Hello";

while (true) {
  greeting = "Hi";
  break;
}

// console.log(greeting);

function replace(str, value) {
  while (true) {
    break;
  }

  str = value;
}

let greet = "Hey!";
replace(greet, "Hello");
console.log(greet);
