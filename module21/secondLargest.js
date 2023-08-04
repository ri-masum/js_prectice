function secondLargest(arr) {
  let largest = (second = -2454635434);
  size=arr.length;
  if (size < 2) {
    console.log("Invalid input");
  }
  // largest number
  for (let i = 0; i < size; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
//   second largest number
for(let i=0;i<size;i++){
    if(arr[i]>second && arr[i]<largest){
        second=arr[i];
    }
}
if(second ==-2454635434)
{
    console.log('there i no second largest element');
}
else{
    console.log('second largest number is :',second);
}
}
const numbers = [23, 22, 44, 5, 21, 54, 11, 22, 31, 12, 3];

console.log(secondLargest(numbers));