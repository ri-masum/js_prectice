function factorial(number) {
  let result = 1;
  for (let i = 1;i<=number; i++) {
    result = result * i;
    var index = i;
    console.log(index);
  }
  return result;
}
var factNumber=5
// const fact=factorial(factNumber);
// console.log('fact of ',factNumber, 'is ',fact);


// factorial using while loop 

function factorialWhile(number) {

    let num=1;
    let result=1
    while(num<=7){
        
        result=result*num;
        num++;
    }

    return result;
    
  }
  let num=10;
//   let factNum=factorialWhile(num);
//   console.log(factNum);

//   reverse
function factorialWhileRev(number) {

let i=9;
let result=1;
while(i>=1){
    result=result*i;
    i--;
}
return result;
    
  }
// let result=factorialWhileRev(21);
// console.log(result);
 
function factorial1(number) {
    let result = 1;
    for (let i = 1;i<=number; i++) {
      result = result * i;
      var index = i;
      console.log(index,result);

    }
    return result;
  }
  var factNumber=20;
  const fact=factorial1(factNumber);
  console.log('fact of ',factNumber, 'is ',fact);