//CONDITIONALS
//program has a sequential flow
//compiler removes white spaces before running a program

//? if
//syntax:
/*
if(condition){
    code
}
*/

//? if...else
//syntax:
/*
if(condition){ //runs if condition is true
    code
} else{ //runs if condition is false
    code
}
*/

//? if...else if...else
//syntax:
/*
if(condition1){
    code
}
else if(condition2){
    code
}
....
else if(conditionN){
    code
}
else{
    //code
}
*/

//?TASK: Find the polarity of a number
/*
let a = -25;

if (a < 0) {
  console.log(`${a} is negative.`);
} else if (a > 0) {
  console.log(`${a} is negative.`);
} else {
  console.log(`${a} is neutral.`);
}
*/

//?TASK: suppose any 3 positive numbers and find the greatest among them
let a = 17;
let b = 16;
let c = 6;

if (a > b && a > c) {
  console.log(`${a} is the greatest.`);
} else if (b > c) {
  console.log(`${b} is the greatest.`);
} else {
  console.log(`${c} is the greatest.`);
}

//? switch
//best for mcq
//syntax:
/*
switch(variable){
    case value1:
        //code
        //break;
    case value2:
        //code
        //break;
        ...    
    case valueN:
        //code
        //break    
    default:
        //code    
}
*/

//?TASK: switch
/*
let dayNumber=1; //cant do '1'
switch(dayNumber){
    case 1: //dayNumber===1 garera compare huncha, so data type has to match
        console.log("Sunday");
        break;
    
    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;   
        
    case 4:
        console.log("Wednesday");
        break;    

    case 5:
        console.log("Thursday");
        break;
    
    case 6:
        console.log("Friday");
        break;

    case 7:
        console.log("Saturday");
        break;    

    default: //no break needed, lekhda farak pardaina
        console.log("Invalid dayNumber");   
}
*/

//? ternary
//syntax: condition? expressionIfTrue:expressionIfFalse

//?ternary alternative of the odd/even program (if...else):
//remainder===0? console.log("even"): console.log("odd");
//also: console.log(remainder===0? "Even":"Odd");

//?Conditional(Ternary) Chaining
//syntax:
/*
condition1? value1
:condition2? value2
:condition3? value3
:value4;
*/

//?Example: prev. polarity task
/*let a = 0;
a < 0 ? console.log("-ve") : a > 0 ? console.log("+ve") : console.log("zero");
*/
