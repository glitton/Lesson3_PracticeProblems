// Question 1

function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return;
  {
    prop1: "hi there";
  }
}

// console.log(first());
// console.log(second());

//Question 2
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

// console.log(numArray); //  => "[1, 2]"
// console.log(object);
// {
//   first: [1, 2];
// }

// Question 3
// A
// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three); // once invoked, vars take on new values

// console.log(`one is: ${one}`);
// // console.log(typeof one);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// B
// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// Question 4: identify all of the variables, primitive values, and objects

function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

//Variables: scare, myBoo, halloweenCollection, let myBoo => 4
//Primitive values: strings: "scare.toUpperCase + !!!", "Happy Halloween", "Boo", "May all ..." => 4
//Objects: {greet: ...}, halloweenCollection["greet"]
