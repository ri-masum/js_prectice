const numbers = [4, 34, 5, 6, 12, 5];
// const doubled = [];
// for (const num of numbers) {
//   const double = num * 2;
//   doubled.push(double);
// }
//  
// arrow function
const double2=n=>n*2;

const output=numbers.map(n=>n*2)

const result=numbers.map(double2)
// console.log(result);

const double3=numbers.map(num=>num/2);
console.log(double3);
const friends=['masum','sawrab','tusehr','rayata','joye','mahi','srabon']
const length=friends.map(frnd=>frnd.length)
const firstLater=friends.map(frnd=>frnd[0])
console.log(firstLater);