let numbers = [1, 2, 3];
numbers[6] = 5; // doesn't raise an error, JS will add 3 empty slots
numbers[4]; // output undefined, but slot is empty, it doesn't have a value not even undefined.

// console.log(numbers[4]);

const hasExclamation = (str) => {
  let endChar = str.charAt(str.length - 1);
  if (endChar === "!") {
    console.log("I'm so excited!");
  } else {
    console.log("ho hum");
  }
};

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?";

// hasExclamation(str1);
// hasExclamation(str2);

// console.log(str1.endsWith("!"));

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty("Spot"));

let munstersDescription = "the Munsters are CREEPY and Spooky.";
let lowercaseDescription = munstersDescription.toLowerCase();
let finalSentence = `${lowercaseDescription
  .charAt(0)
  .toUpperCase()}${lowercaseDescription.substring(1)}`;

// console.log(finalSentence);
