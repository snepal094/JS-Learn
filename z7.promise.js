//?promise: something that happens in the future

// promise has three states: pending, success & failure
//success and failure (result)= mutually exclusive

//to get a result, a promise needs to be resolved

//call back function was used to resolve promise
//then came .then .catch
//async...await is now used

//* call back function
//!EXAMPLE 1
/*
const getSum = (a, b, callback) => {
  let error = false; //let error= true; (error occurs)
  setTimeout(() => {
    if (error) {
      callback("error encountered", null);
    } else {
      callback(null, a + b);
    }
  }, 1000);
};

const res = getSum(2, 5, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
*/

//!EXAMPLE 2
/*
const getRandomNumber = (callback) => {
  let randomNumber = Math.random(); //0 to 1
  setTimeout(() => {
    if (randomNumber > 0.5) {
      //success
      callback(null, randomNumber);
    } else {
      //failure
      callback("Number is too small.", null);
    }
  }, 2000);
};

getRandomNumber((error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
*/

//?Callback Hell (Pyramid of Doom)
// when multiple nested callbacks make the code difficult to read and maintain
//Solution: async/await

//* .then .catch
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.random();

    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject('Too small number');
    }
  }, 2000);
});

//promise
/*
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
  */

//* async await
// const getRandomNumber = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error, "error");
//   }
// };

//! await should wrapped by an async function
//use await in front of task that takes time
//try catch is used for error handling

console.log('Hello');
getRandomNumber();
console.log('Hi');

//?real world use case
const getProductData = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');

    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log('Api hit failed');
    console.log(error.message);
  }
};

getProductData();

// ? resolving promise using .then .catch
// fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     res
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((error) => console.log(error));
