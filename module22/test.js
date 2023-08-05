const country= 'bangladesh'
const age=45
const isIndepended=true
const student={
    id:233,
    class:11,
    name:'masum'
}
const friends=[22,3,2,2,12,2]
function add(){

}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndepended);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(2));
if(friends.indexOf(3));

// concat
const newFriends=[343,34,35,6,32,3,4]
const allFriends=newFriends.concat(friends)
console.log(allFriends);