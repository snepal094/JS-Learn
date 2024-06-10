//? Give an example of a rest operator.
const person = {
  name: "Adele",
  age: 42,
  city: "New York",
  profession: "Singer",
};

const { name, age, ...rest } = person;

console.log(name);
console.log(age);
console.log(rest);
