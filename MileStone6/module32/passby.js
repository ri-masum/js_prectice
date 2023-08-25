
// primitive types are pass by value 
let n1=5;
let n2=10;
function mult(a,b){
    a=10;
    const result=a*b;
    return result
}
// console.log(n1);
const result=mult(n1,n2)
// console.log(result);
// console.log(n1);



// object and array are pass by reference

let jura1={name:'masum',partner:'arpita'}
let jura2={name:'samin',partner:'papre'}

function makeLove(couple1,couple2){
    couple1.name='rajshahi'
    couple2.name='masum'
}

console.log(jura1,jura2);

makeLove(jura1,jura2)
console.log(jura1,jura2);
