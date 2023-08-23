const actor ={
    name:'ananta',
    age:20,
    phone:'01703145877',
    money:342353
}

/**distructing  
 * 
 * use property name as a variable that contains the property value
 * 
 * 
*/

const {money:taka,age,name,phone}=actor
// console.log(taka);
// console.log(age);
// console.log(phone);
// console.log(name);


/**array distructuring 
 * advance 
*/


function something(a,b,c){
    return [a*b*c,a+b*c,a+a+a+b-c+100]

}

const [first,second,third]=something(20,10,30)
console.log(first ,second,third);


 

/**normaly finding  */
// const phone=actor.phone
// const name=actor.name
// console.log(phone);
// console.log(name);