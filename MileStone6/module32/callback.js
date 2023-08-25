function greeting(greetingHandler,name){
greetingHandler(name)
}
const number=12;
const numberArray=[3.23,42,53,32];
const laptop={price:324,brand:'mac',memory:'12Gb'}

// greeting(number)
// greeting(numberArray)
// greeting(laptop)

function greetingHandler(name){
    console.log('valo aso',name);
}
function greetEvening(name){
    console.log('good evening',name);
}
greeting(greetingHandler,"masum");
greeting(greetEvening,"masum");