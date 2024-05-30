//string to number conversion
//numeric strings
const x = "45";
const y = Number(x); //equivalent to: const y= +x;
console.log(typeof x, typeof y);

//old way of doing the same thing: parseInt, parseFloat
const m = "11";
const n = parseInt(m);
console.log(n, typeof n);
//old cuz turns 11abc to 11, 11.5 to 11 (parseFloat turns to 11.5 itself)
//Number is convenient, dosen't attempt conversion if type is not equivalent

//conversion to string
const isMarried = String(true);
console.log(isMarried, typeof isMarried);

const userName = "Suyasha";
//to print: Hi, I am Suyasha.

//Method 1
console.log("Hi, I am", userName, "."); //fullstop aghi space ayo, not ideal

//Method 2: String Concatenation
console.log("2" + "3");
console.log(+"2" + +"3");
console.log("Hi, I am " + userName + ".");

//Method 3: template literal(back tick)
console.log(`Hi, I am ${userName}.`); //${} is called template literal
//string bhitra js chirauna parey use back tick and ${}

//also works with objects
abc = { Name: "Suyasha" };
console.log(`Hi, I am ${abc.Name}`);

const t = 12;
const p = `${t}`;
console.log(p, typeof p);
