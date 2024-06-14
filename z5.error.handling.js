//? error
//error is inevitable
//you can't afford to stop the whole program if error is encountered in one part of it
//which is why you need to handle errors

// const z = 2;
// z = 3;
// console.log("Hi"); //no run since error is encountered

//!EXAMPLE 1
let x = 2;
//const x= 2;

try {
  x = 5;
  console.log("Hit"); //if "Hit" is printed, error is not encountered
} catch (error) {
  //this block is run if error is encountered
  console.log(error.message); //console.log(error) prints the entire error
} finally {
  //this block is run irrespective of the occurence of error
  console.log("Send Email.");
}

console.log("hi"); //occurence of error dosen't hinder its execution (because of error handling)

//!EXAMPLE 2
try {
  let user = null;

  if (!user) {
    //if user dosen't exist, i.e. user=null, only then will this block execute
    //\ !null=truthy
    throw new Error("User does not exist.");
  }
  console.log("Hey man, wassup?");
} catch (error) {
  console.log(error);
}
