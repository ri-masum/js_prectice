/**
 * 
 * array sum using for loop and function
 * 
 * 
 */

function sumOfArray(numbers) {
    let sum=0;
  for (let i = 0; i < numbers.length; i++) {
    const index=i;
    const element=numbers[index];
    
    sum=sum+element;
    console.log(index,element,sum);


  }
  return sum;
}
const myNumber = [
  30, 28, 90, 34, 35, 34, 87, 65,50,43
];

sumOfArray(myNumber);
