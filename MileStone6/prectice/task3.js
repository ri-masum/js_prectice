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
    // console.log('senior developer :',output[i].name);

}

const dreamGirl = [
    {
     sokina: {
      name: "bbu",
      height: "5.4",
      family: [{ father: "rock", mother: "shila", sister: "chinki" }],
      age: undefined,
      contactInfo: [
       {
        facebook: {
         link: "https://www.facebook.com/",
         followers: "12545",
         status: "single",
         friendsList: [{ name: "rofik" }, undefined],
        },
       },
       { instagram: "https://www.instagram.com/" },
      ],
     },
    },
   ];

//    console.log(dreamGirl[0].sokina.contactInfo[1].instagram);


const phones = [
 { name: "sony", price: 500 },
 { name: "apple", price: 700 },
 { name: "sony", price: 700 },
];

const result=phones.filter((phones)=>phones.price !=500)
console.log(result);