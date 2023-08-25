function kitchn(){
    let roast=0;
    return function()
    {
        roast++
        return roast
    }
}
const firstServer=kitchn();
// console.log(firstServer());

function stopWatch(){
    let counter=0;
    return function(){
        counter++
        return  counter
    }
}
const watch1=stopWatch();
console.log(watch1());
console.log(watch1());
console.log(watch1());

const watch2=stopWatch();
console.log('watch2=',watch2());
console.log(watch1());