const people=[
    {name:'masum',age:24},
    {name:'topu vai',age:30},
    {name:'nuha',age:20}
]

// for (let i in people){

//     let ages=people[i].age;

//     console.log(ages);

//     // console.log(people[i].age);
// }

// const ageSum=people.reduce((a,c)=>{
//     return a+c.age;
// },0);
// console.log(ageSum);
const ageSum=people.reduce((a,c)=>{
    return a+c.age
},0)

console.log(ageSum);