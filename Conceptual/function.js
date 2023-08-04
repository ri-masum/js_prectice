/**@Function */
function totalSum(arr) {
  let sum = 0;

  for (let item =0;item<arr.length;item++) {

    sum=sum+arr[item];
  }
  return sum;
}
const num1 = [5,5,5,5];
// const total = totalSum(num);
// console.log(total);

// factorial number find out 
function factorial(num){
    let result=1;

    for(let i =num;i>=1;i--){
        result=result*i;
    }

    return result;
}

console.log(factorial(10));
