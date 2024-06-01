let advice =
  "Few things in life are as important as house training your important pet dinosaur.";
// console.log(advice.replace("important", "urgent"));
// console.log(advice.replaceAll("important", "urgent"));

let numbers = [1, 2, 3, 4, 5];
// console.log(-(numbers.length - 1));
// let reversedArray = numbers.slice().reverse();

let sortedReversedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedReversedArray);

let reversedArray = [];

numbers.forEach((number) => {
  reversedArray.unshift(number);
});

console.log(reversedArray);
