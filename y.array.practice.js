const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070, //$
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

//1. give 6 percent discount on 6:6 on each laptop
const sixSixDiscount = laptopList.map((item, index, array) => {
  let discountedPrice = item.price - (6 / 100) * item.price;

  return { ...item, price: discountedPrice };
});
console.log("Question 1:");
console.log(sixSixDiscount);

//2. increase price of Dell laptops by 10%
const priceHike = laptopList.map((item) => {
  if (item.brand === "Dell") {
    let newPrice = item.price + (1 / 10) * item.price;
    return {
      ...item,
      price: newPrice,
    };
  }
  return { ...item };
});
console.log("Question 2:");
console.log(priceHike);

//3. find all lenovo laptops
const lenovoLaptops = laptopList.filter((item) => item.brand === "Lenovo");
console.log("Question 3:");
console.log(lenovoLaptops);

//4. update the name of "Idea Pad" to "Idea Pad Ultra"
const updateName = laptopList.map((item, index, array) => {
  if (item.name === "Idea Pad") {
    return {
      ...item,
      name: "Idea Pad Ultra",
    };
  }
  return { ...item }; //spread op, not a shallow copy since laptopList dosen't contain any objects. wouldn't work for nested objects
});
console.log("Question 4:");
console.log(updateName);

//5. get all laptops whose price is below $1050
const laptopBelow50 = laptopList.filter((item) => item.price < 1050);
console.log("Question 5:");
console.log(laptopBelow50);

//6. find "Zenbook 15" laptop details
const zenDetails = laptopList.filter((item) => item.name === "Zenbook 15");
console.log("Question 6:");
console.log(zenDetails);

//7. find the sum of prices of all laptops
const total = laptopList.reduce((sum, item) => {
  sum = sum + item.price;
  return sum;
}, 0);
console.log("Question 7:");
console.log(total);
