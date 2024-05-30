//AND(&&), OR(||), NOT(!)

/* 
? 1
Let a=2,b=-3,c=5,d=10,e=9. Calculate
a. a>b AND c<=d
b. a+b<c OR d*a>=c
c. (a**c===d AND d===e+a-1)  OR d % e!==1
d. 2^a+b>d OR c-d>b
*/

let a = 2;
let b = -3;
let c = 5;
let d = 10;
let e = 9;

console.log("a>b && c<=d is ", a > b && c <= d); //a
console.log("a+b<c OR d*a>=c is ", a + b < c || d * a >= c); //b
console.log(
  "(a**c===d AND d===e+a-1)  OR d % e!==1 is ",
  (a ** c === d && d === e + a - 1) || d % e !== 1
); //c
console.log("2^a+b>d OR c-d>b is ", Math.pow(2, a) + b > d || c - d > b); //d

//? 2. Let isEarthRound= true, run NOT(!) operator on this.
//? Print out: !isEarthRound.
let isEarthRound = true;
console.log(!isEarthRound);
