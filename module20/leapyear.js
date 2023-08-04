function leapYearCheck(year){
    if (year % 4 == 0) {

        return true;
    }
    return false;
}


function leapYear(givenYear) {
  const leapCheck = [];
  for (let year of givenYear) {
    
    if(leapYearCheck (year)){
        leapCheck.push(year);
    }
 

  }
  return leapCheck;
}

const givenYear = [2023, 2024, 2025, 2028, 2030];
const leapCheck=leapYear(givenYear);
console.log('Leap years are : ',leapCheck);
