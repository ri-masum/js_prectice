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


function arraySumOdd(number) {
  const oddNumber = [];
  for (let i = 0; i < number.length; i++) {
    const index = i;
    const element = number[index];
    if (element % 2 !== 0) {
      console.log(index, element);
      oddNumber.push(element);
    }
  }
  return oddNumber;
}

let arr = [10, 21, 23, 30, 45, 50,55,65,70,77,99];
const oddNumber=arraySumOdd(arr);
console.log(oddNumber);
const sum=sumOfArray(oddNumber);
console.log('sum of odd numbers are: ',sum);