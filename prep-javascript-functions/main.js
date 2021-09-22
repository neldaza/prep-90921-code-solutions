function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(4, 7);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(5);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var Greeting = getGreeting('Nelson');
console.log(Greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = num1 + num2;
  return result * 5;
}
var addAndMultiplySum = addAndMultiplyBy5(3, 5);
console.log(addAndMultiplySum);

function multiplyAndDivideBy5(num1, num2) {
  const result = num1 * num2;
  return result / 5;
}
var multiplyAndDivideResult = multiplyAndDivideBy5(10, 5);
console.log(multiplyAndDivideResult);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var resultSubtractNumbers = subtractTwoNumbers(20, 5);
console.log(resultSubtractNumbers);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var name = getFullName('Nelson ', 'Daza');
console.log(name);

function cube(number) {
  return number * number * number;
}
var cubeResult = cube(5);
console.log(cubeResult);
