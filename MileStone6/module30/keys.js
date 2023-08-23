const glass = {
  name: "glass",
  color: "pink",
  price: 12,
  isCleaned: true,
};

// console.log(glass);
//all properties names
const keys=Object.keys(glass)
// all properties keys
const values=Object.values(glass)
// all properties values
const pair=Object.entries(glass)
// array of array, two dimensional array
// console.log(pair);
// console.log(values);

// delete glass.isCleaned;
// console.log(glass);

const {isCleaned,...shorGlass}=glass;
// console.log(shorGlass);

// freeze
// eita korte new kunu properties add or remove korete parbo na
// Object.freeze(glass);
Object.seal(glass);

glass.source='bangladesh';
// glass.price=3242;
delete glass.name;
glass.price=50000;


console.log(glass);
