//? 1. Write out all comparison operators.
/*
== compares two values for equality after type conversion
=== compares two values for equality without type conversion
\ != compares two values for inequality after type conversion
\ !== compares two values for inequality without type conversion
> checks if the left operand is greater than the right operand
< checks if the left operand is less than the right operand
>= checks if the left operand is greater than or equal to the right operand
<= checks if the left operand is less than or equal to the right operand
\ ? Ternary operator, that acts as a short alt for an if-else statement
*/

//? 2. Explain the difference between == and === operator.
/*
== Equality Operator: compares two values for equality after converting them to a common type
=== Strict Equality Operator: compares two values for equality without converting them to a common type
*/

//? 3. Check if “5” === 5 . Check if “5” == 5. Explain the answer in both cases.
console.log('"5" === 5 is ', "5" === 5);
//False
//Reason: "5" is a string whereas 5 is a number.

//? 4. Check if 5!==10. Explain the answer.
console.log("5!==10 is ", 5 !== 10);
//True
//Reason: 5 is numerically not equal to 10, even if both are numbers

//? 5. Check if 100 greater than 100. Also check if 100 is greater than or equal to 100.
console.log("100>100 is ", 100 > 100);
console.log("100>=100 is ", 100 >= 100);

//? 6. Check if 5 is less than 10.
console.log("5<10 is ", 5 < 10);

//? 7. Is “Dinesh”===”dinesh”?Explain.
console.log("Dinesh===dinesh is ", "Dinesh" === "dinesh");
//False
//Reason: ASCII value is used in string-string comparison

//? 8. Explain NaN(Not a Number)
/*NaN represents a value that is not a valid number. 
It is still considered a numeric value, i.e. typeof NaN= number
It is a special value of the number data type.
It is not equal to any value, including itself. (NaN==NaN is false)
Common ways it is produced: Math.sqrt(-1), 0/0, Number("abc"), etc.
*/
