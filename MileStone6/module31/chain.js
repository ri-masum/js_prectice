
// data access
const data=[{id:1,name:'masum',address:'sreemangal'}]
// console.log(data[0].name);


const products={
    count:5000,
    data:[
        {id:1,name:'lenevo laptop',price:50000},
        {id:2,name:'Mac M1 air laptop',price:150000},
        {id:3,name:'asus laptop',price:90000},
        {id:4,name:'noting laptop',price:60000},
        {id:5,name:'aslu laptop',price:50000},
        {id:6,name:'tel laptop',price:20000},
        {id:7,name:'dell laptop',price:10000},
        {id:8,name:'vivo laptop',price:100000}
    ]
}
// console.log(products.data[7].price);


const user={
    id:20001,
    address:
        {
            street:'lalabazar',
            road:'dokkin bazar',
            house:'tui jania ki korbi'
        }
    
}

const user1={
    id:20001,
    address:
        {
            street:'lalabazar',
            road:'dokkin bazar',
        }
    
}
console.log(user1.address.house);