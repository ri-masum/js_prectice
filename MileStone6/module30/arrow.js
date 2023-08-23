
// function declearation
function add(a,b){
    const result=a+b

return result}

const sum=add(5,6)
// console.log(sum);

// function expression

const add2=function(a,b){
    return a+b
}

// arrow function

const add3=(a,b) => a+b;

const multiply=(num1,num2)=>num1*num2;

const mult=multiply(7,9)
// console.log(mult);

// more array functions  case 

// single parameter



// no parameter

// const test=a=>console.log(a,a,a);

// const print=test('fuck you');


const getAge=(person)=>person.age;
const student={
    name:'masum',
    age:23
}
const age =getAge(student)
// console.log(age);

const getSecond=numbers=> numbers[1];
const number=getSecond([4,23,234,2,23,245,55,2]);

// console.log(number);

const numbers=[4,23,53,23,23,45,3,23,3];
const arrayMax=Math.max(...numbers);
console.log(...numbers);
console.log(arrayMax);