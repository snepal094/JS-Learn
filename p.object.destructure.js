//!EXAMPLE1
const bookDetail = {
  name: "Operating System",
  author: "A. Tanenbaum",
  publishedDate: "1990/01/01", //no data type for date in JS (limitation), store date in string
  numberOfPages: 500,
  coverPhoto: null,
  price: undefined,
};

//must have a structure (object) to destructure
//perk: can directly access properties after destructuring instead od accessing through square brackets or dot operators

//?Destructure:
//no need to include all properties while destructuring
//const{name, author}= bookDetail; will also do (but will work only for name and author)
const { name, author, publishedDate, numberOfPages, coverPhoto, price } =
  bookDetail;

console.log(author); //instead of bookDetail.author

//!EXAMPLE2
const obj1 = {
  nameA: "Cup",
  priceA: 7,
};

const obj2 = {
  nameA: "mouse",
  priceA: 15,
};

const { priceA } = obj1;
const { priceA: priceOfProduct2 } = obj2;

//Problem: 2 objects having the same key name
//?Solution?
//Either change the name of the key in one of the objects.
//OR: {price: priceOfProduct2} (dosen't change the name of the key in the object itself)
console.log(priceOfProduct2);

//!EXAMPLE3
//nested object
const student = {
  name1: "Sandhya",
  college: "HCOE",
  isGraduated: false,
  image: null,
  address: {
    permanent: "A",
    temporary: "B",
  },
};

//double destructure
const {
  name1,
  college,
  isGraduated,
  image,
  address: { permanent, temporary }, //in case renaming is required: {permanent: permanentAddress, temporary}
} = student;

console.log(permanent);
//in case double destructuring hadn't been done, address.permanent had to be used

console.log(`My name is ${name1}.`);
