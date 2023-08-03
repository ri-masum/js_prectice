function odd_even(num) {
 const reminder=num%2;

if(reminder===0){
    console.log('the number is even');
}
else{
    console.log('the number is  odd');
}
}



// number checking
/**
 odd_even(10);
odd_even(12131);
odd_even(1012312);
odd_even(12130);
odd_even(123210);
odd_even(14350);
 */

function leapYear(year){
    const value=year%4;
    if(value==0){

        console.log('the year is leap year',year);
    }
    else{
        console.log('the year is not leap year',year);
    }


}
leapYear(2023);