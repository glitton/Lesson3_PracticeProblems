// Question 1: write a program that outputs The Flintstones Rock! 10 times,
// with each line indented 1 space to the right of the line above it.

//Input is The Flintstones Rock!
//Output is 10 The Flintstones Rock! each one having one indented space to the
//right
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...
//First one is printed with out a space, second one has one space, third one, has
//two spaces ... 10th one has 9 spaces
//space is equal to the nth time the sentence is printed minus 1
//if sentence is the 8th time, there are seven spaces

// Data strucure are strings
//Algorithm:
//Create a loop that goes through a sequence 10 times
//Each time, add a space then the sentence The Flintstones Rock!

function repeatString(str, num) {
  const space = " ";
  for (let i = 0; i < num; i++) {
    console.log(space.repeat(i) + str);
  }
}

// repeatString("The Flintstones Rock!", 10);

// Question 2
function changeCase(str) {
  let newText = "";
  const lettersArray = str.split("");
  // console.log(lettersArray);
  lettersArray.map((letter) => {
    if (letter === letter.toUpperCase()) {
      newText += letter.toLowerCase();
    } else {
      newText += letter.toUpperCase();
    }
  });
  return newText;
}

let munstersDescription = "The Munsters are creepy and spooky.";
console.log(changeCase(munstersDescription));

// Launch School solution
// console.log(
//   munstersDescription
//     .split("")
//     .map(function (char) {
//       if (char === char.toUpperCase()) {
//         return char.toLowerCase();
//       } else {
//         return char.toUpperCase();
//       }
//     })
//     .join("")
// );
