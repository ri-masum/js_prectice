const arr=[1,1,1,1,1,4,5,5,5,6,6,6,5,3,23,21,11,1,1,1]

// let newArr=Array.from(new Set (arr));
// console.log(newArr);

//using fuction duplicate check

function removeDuplicate(numbers){

    const unique=[];
    for( let i=0; i<numbers.length;i++){
        const number=numbers[i];
        if(unique.includes(number)==false){
            unique.push(number);
        }

    }
    return unique

}
const result=removeDuplicate(arr);
console.log(result);