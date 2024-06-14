const getSum = (x, y = 0) => {
  //arguments having default values are listed at the end
  let sum = x + y;
  return sum;
};

const res = getSum(2); //since y is not passed, default value is used
console.log(res);

const greetUser = (userName = "User") => {
  console.log(`Good Morning ${userName}!`);
  //?in case default value is not inserted in argument:
  //console.log(`Good Morning ${userName || "User"}.`);
  //console.log(`Good Morning ${userName ? userName : "user"}.`);
};

greetUser("Smriti");
greetUser();
