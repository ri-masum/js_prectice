// console.log('1');
// console.log('1');
// console.log('1');
// let num=0
// setInterval(() => {
//     console.log('fuck you',num++);
// }, 100);
// console.log('1');
// // console.log('1');

let num=0;
const intervalId=setInterval(() => {
    
    console.log(++num);
    if (num===100) {
        clearInterval(intervalId)
        
    }
}, 10);