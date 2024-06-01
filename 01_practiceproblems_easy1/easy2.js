let advice =
  "Few things in life are as important as house training your important pet dinosaur.";
// console.log(advice.replace("important", "urgent"));
// console.log(advice.replaceAll("important", "urgent"));

// let numbers = [1, 2, 3, 4, 5];
// console.log(-(numbers.length - 1));
// let reversedArray = numbers.slice().reverse();

// let sortedReversedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedReversedArray);

// let reversedArray = [];

// numbers.forEach((number) => {
//   reversedArray.unshift(number);
// });

// console.log(reversedArray);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8; // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

let famousWords = "seven years ago...";
let beginningFamousWords = "Four score and ";
// let final = `${beginningFamousWords}${famousWords}`;
let final = beginningFamousWords.concat(famousWords);
console.log(final);

let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 1);
console.log(numbers);
