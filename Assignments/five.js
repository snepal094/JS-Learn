/*Perform arithmetic operation based on the options provided. 
Set two variables with numbers. 
Create another variable called “option” which can be add/subtract/multiply/divide/power. 
Based upon the value of the option, perform appropriate operation. 
e.g. if option is “add”, perform num1+num2*/

let num1 = 10;
let num2 = 2;

let option = ["add", "subtract", "multiply", "divide", "power"];
op = option[4];

switch (op) {
  case "add":
    x = num1 + num2;
    console.log(`${num1}+${num2}= ${x}`);
    break;

  case "subtract":
    x = num1 - num2;
    console.log(`${num1}-${num2}= ${x}`);
    break;

  case "multiply":
    x = num1 * num2;
    console.log(`${num1}*${num2}= ${x}`);
    break;

  case "divide":
    x = num1 / num2;
    console.log(`${num1}/${num2}= ${x}`);
    break;

  case "power":
    x = Math.pow(num1, num2);
    console.log(`${num1}^${num2}= ${x}`);
    break;

  default:
    console.log("Invalid Option Selected.");
}
