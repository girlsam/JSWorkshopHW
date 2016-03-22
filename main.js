//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).
console.log("Question 1");
console.log("Sam");

//2. Declare a variable called 'name', and then log it to the console.
console.log("Question 2");
var name = "Sam";
console.log(name);

//3. Declare two variables with number values.
//   Add, subtract, multiply and divide them.
console.log("Question 3");
var numberOne = "12";
var numberTwo = "4";
console.log(numberOne + numberTwo);
console.log(numberOne - numberTwo);
console.log(numberOne * numberTwo);
console.log(numberOne / numberTwo);

//4. Declare two variables with string values.
//   Create a third variable that concatenates them.
console.log("Question 4");
var numberoUno = "7";
var numberoDos = "12";
var allNumberos = numberoUno + " " + numberoDos;
console.log(allNumberos);

//5. Add, subract, multiply and divide the strings '5' and '3'.
//   Observe the results and know how to explain the results if asked.
console.log("Question 5");
var stringOne = "five";
var stringTwo = "three"
console.log(stringOne + stringTwo);
console.log(stringOne - stringTwo);
console.log(stringOne * stringTwo);
console.log(stringOne / stringTwo);

//6. Create a prompt that asks a user to pick a number.
console.log("Question 6");
prompt("Pick a number, any number!");

//7. Create a custom alert.
console.log("Question 7");
alert("Your number must be greater than three digits.");

//8. Declare three variables called length, width and height. Calculate area and volume.
console.log("Question 8")
var length = "7";
var width = "12";
var height = "3";
console.log(length * width);
console.log(length * width * height);

//9. Ask for a user's name, age and city.
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."
console.log("Question 9");
var userName = prompt("What is your name?")
var userAge = prompt("How old are you?")
var userCity = prompt("Where do you live?")
console.log("My name is " + userName + ". I'm " + userAge + ", and I live in " + userCity + ".");

//10. Create an alert that uses the response from a prompt.
console.log("Question 10");
if (userAge >= "27") {
  console.log("Happy birthday!");
}
