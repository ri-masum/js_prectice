const friends=[3,32,34,4,34,55,32];

const partial=friends.slice(1,5);
// console.log(partial);
const partial1=friends.splice(1, 3,1,1,1,11,1)
console.log(partial1);
// splice remove the element from array 
console.log(friends);

