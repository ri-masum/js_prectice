function smallestNumberFromArray(arr){

    let smallest=arr[0];
    for(let i=0;i<arr.length;i++){
        const cuurentNumber=arr[i];

        if(cuurentNumber<smallest){
            smallest=cuurentNumber;
        }
    }
    return smallest;


}


const numbers=[23,22,44,5,21,54,11,22,31,12,3];
// console.log(smallestNumberFromArray(numbers));


// smallest from 3 numbers
const num1=10;
const num2=20;
const num3=5;

if(num1 < num2 && num1 <num3){
    console.log(num1);

}
else if(num2<num1 && num2 <num3){
    console.log(num2);
}
else{
    console.log(num3);
}