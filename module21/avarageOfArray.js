/**
 *make a function while will  take array as input and find the average of the array numbers
 */

function averageOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum+=arr[i]
 
    
  }
  let total=sum;
  const average=total/arr.length;
  return average.toFixed(2);
}

const numbers = [23, 22, 44, 5, 21, 54, 11, 22, 31, 12, 3];
console.log(averageOfArray(numbers));
