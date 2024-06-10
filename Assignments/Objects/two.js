//?Create an object named myHouseDetails and add the following properties:
/*
a. numberOfRooms
b. numberOfMembers
c. colorOfHouse
d. builtYear
e. numberOfStorey
*/

let myHouseDetails = {
  numberOfRooms: 6,
  numberOfMembers: 4,
  colorOfHouse: "red",
  builtYear: 1998,
  numberOfStorey: 3,
};

console.log(myHouseDetails);

//?A. Delete numberOfMembers property
//delete myHouseDetails.numberOfMembers;
//console.log(myHouseDetails);

//?B. Update numberOfRooms by new value
myHouseDetails["numberOfRooms"] = 5;
console.log(myHouseDetails);

//?C. Add a new property called estimatedPriceOfHouse
myHouseDetails.estimatedPriceOfHouse = 10000000;
console.log(myHouseDetails);

//?D. Print our all properties on the console like "I have a green coloured house
//? with 9 rooms where 10 people are living. The house is 3 storey and was built in
//? 2011 with an estimated budget of 2 crores.
console.log(
  `I have a ${myHouseDetails.colorOfHouse} coloured house with ${myHouseDetails["numberOfRooms"]} rooms where ${myHouseDetails.numberOfMembers} people are living. The house is ${myHouseDetails.numberOfStorey} storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails["estimatedPriceOfHouse"]}.`
);
