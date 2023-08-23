const numbers=[1,4,2,4,5,3];
for(const num of numbers){
    // console.log(num);
}

const name='my name is masum';
for(const char of name){
    // console.log(char);
}
const glass = {
    name: "glass",
    color: "pink",
    price: 12,
    isCleaned: true,
  };

// for of hobe na object er modde 
// but we can use for in 
  for(const keys in glass){
    const value=glass[keys]
    // console.log(keys,value);
  }

//   but we can use for of in object but ektu pecaia arki
const keys=Object.keys(glass);
// console.log(keys);
for(const key of keys){
    // console.log(key);
}

// for of use in array
// for in use in objects