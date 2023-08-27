const instructor=[
    {name:'nodi',age:28,position:'senior' },
    {name:'akil',age:26,position:'junior' },
    {name:'shobuj',age:30,position:'senior' },
]
// console.log(instructor[0].position);
// const seniorPosition=instructor.filter(position==='senior')
// console.log(seniorPosition);
const output=instructor.filter(ins=>ins.position==='senior');
for(let i in output){
    console.log('senior developer :',output[i].name);

}
