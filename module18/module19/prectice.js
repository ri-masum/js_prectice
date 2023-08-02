// write a function call foo()which print foo and bar() which print bar.call function bar() in the foo() function after printing .what will be the output ? now call the foo() to see the output
function foo() {
  console.log("foo");
  bar();
}
function bar() {
  console.log("bar");
}
// foo();

// make a function call make_avg() which will take an three integers and retuen the average of those values.
function make_avg(a, b, c) {
  var sum = a + b + c;
  var avg = sum / 3;
  console.log(avg);
}

// make_avg(10,20,30);

// write a function called make_arr_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_arr_avg() {
  var arr = [1, 2, 3, 4, 5];
  const sum = arr.reduce((a, b) => a + b, 0);
  const avg = sum / arr.length || 0;
  console.log("sum is :" + sum + "\n" + "avarage is :" + avg);
}
// make_arr_avg();

/**
 *  write a function called odd_even() which takes an integer value and 
    tells wether this value is even or odd. Ypu need to do it in 4 ways:
        i)has retuen +has parameter
        ii)no return + has parameter
 */
// with parameter no return
function odd_even1(a) {
    if(a % 2 ==0){

        console.log(a,' is even');
    }
    else{
        console.log(a,' is odd');
    }
}
// odd_even(2);

// with parameter with return
function odd_even2(a) {
    if(a % 2 ==0){
        return "even";

    }
    else{
        return "odd";    }
}

// without parameter with return
function odd_even3() {
    const a=9;
    if(a % 2 ==0){
        return "even";
    }
    else{
        return "odd";
    }
}

// without parameter witout return
function odd_even4() {
    const a=5;
    if(a % 2 ==0){

        console.log(a,' is even');
    }
    else{
        console.log(a,' is odd');
    }
}

/**
 
odd_even1(3);
const result2= odd_even2(2);
console.log(result2);
const result3= odd_even3();
console.log(result3);
odd_even4();
 */

var signal='green';
switch(signal){


    case 'green':
    console.log('You can cross the road');
    break;
    case 'yellow':
        console.log('You need to stop');
        break;
    case 'red':
        console.log('You are in danger');
        break;
    default:
        console.log('Your dead');
        break;
}
