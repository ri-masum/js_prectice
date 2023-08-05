
/**
 * upper case lowercase String releted
 */
let userName="masum Ahmed";
let userInput="Masum AhmeD"
// console.log(userName.toLowerCase());
// console.log(userInput.toUpperCase());

if (userName.toLowerCase()==userInput.toLowerCase()){
    // console.log('valid ');
}
else{
    // console.log('invalid');
}
/**
 * scarch from string and also using lowercase to ingore error
 */
let lyrics="amr nam masum ami ekn coding korram so no one plz don't distrub me okey  "
const scarch="CodinG"
const doesExist=lyrics.includes("masum");
const oneLineDoesExist=lyrics.toLowerCase().includes(scarch.toLowerCase());
// console.log(oneLineDoesExist);
// console.log(doesExist );


/**
 * indexof
 * startWith
 * endsWith
 * 
 */

//split to break the string 
let gan="amr nam masum ami ekn coding korram. so no one plz don't distrub me okey  "

const parts=gan.split(' ');
const chars=gan.split('');
const dot=gan.split('.');
// console.log(chars);

// slice 
const partial=gan.slice(5,18);
// console.log(partial);


// swap with temp 
let first=10;
let second=5;
// console.log(first,second);

let temp=first;

first=second;
second=temp;

// console.log(first,second);
// swap without temp,destruction

[first,second]=[second,first]
// console.log(first,second);