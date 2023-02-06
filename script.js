// (1) var, let, const ***

// Var example
// var firstName = "Bapi";
// console.log(firstName);
// firstName = "Biswas";
// console.log(firstName);

// let example
// let lastName = "Biswas";
// console.log(lastName);
// lastName = "Bapi";
// console.log(lastName);

// // Const Example
// const firstName = "Bapi";
// console.log(firstName);

// (2) Arrow function***

// example 1 normal function

// function showtext(text) {
//   console.log(text);
// }
// showtext("javascript text");

// // example 2 arrow function
// const showTheText = (text) => {
//   console.log(text);
// };
// showTheText("arrow function text");

// // example 3 arrow function
// const showTheText2 = () => {
//   console.log("Normal text");
// };
// showTheText2();

// // Example 4
// // const showResult = (number) => {
// //   return number * 2;
// // };
// // console.log(showResult(5));

// const showResult = (number) => number * 2;
// console.log(showResult(5));

// (3) Spread Operator***
// Array Example
// const num1 = [1, 2, 3, 4];
// console.log(num1);

// const num2 = [...num1, 5, 6];
// console.log(num2);

// // Object Example
// const user1 = { fName: "Bapi", lName: "Biswas" };
// console.log(user1);

// const user2 = { ...user1, age: 31 };
// console.log(user2);

// // another example
// const getNumbers = (...number) => {
//   console.log(number[0]);
// };
// getNumbers(2, 4, 6);

// (4) Destructuring***

// array example
// const num1 = [1, 2, 3];
// // const n1 = num1[0];
// // const n2 = num1[1];
// // console.log(n1);
// const [n1, n2, n3] = num1;
// console.log(n1);
// console.log(n2);
// console.log(n3);

// // object destructuring
// const user1 = {
//   fName: "Bapi",
//   lName: "Biswas",
//   age: 31,
// };

// // const firstName = user1.fName;
// // const lastName = user1.lName;
// const { fName, lName, age } = user1;
// console.log(fName);
// console.log(lName);

// (5) Array Map
// const num1 = [2, 4, 6, 8];
// num1.map((num) => {
//   console.log(num * 3);
// });
// // (6) Filter
// // (7) Reduce

// // (8)Javascript classes
// class car {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
//   age() {
//     return 2023 - this.year;
//   }
// }
// const myCar = new car("BMW", 2017);
// const yourCar = new car("Ford", 2023);
// console.log(myCar);
// console.log(yourCar);
// console.log(myCar.age());

// (9)Export and Import
