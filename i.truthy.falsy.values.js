//?falsy values
//when a conditions results in these values, they are equivalent to false values
//false, null, undefined, 0, -0, NaN, ""

//?truthy values
//all values except falsy values

let condition1 = 0;
condition1 ? console.log("truthy") : console.log("falsy");

let condition2 = 100;
condition2 ? console.log("truthy") : console.log("falsy");
