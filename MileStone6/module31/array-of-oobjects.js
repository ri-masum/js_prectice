const products=[
    {id:1,name:'lenevo',price:40000},
    {id:2,name:'asus',price:60000},
    {id:3,name:'lava',price:70000},
    {id:4,name:'mac',price:150000}
]

// map
const names=products.map(product=>product.name);
// console.log(names);
const price=products.map(product=>product.price)
// console.log(price);


// forEach
// products.forEach(p=>console.log(p.id))
const expensive=products.filter(p=>p.price>50000)
// console.log(expensive);

// find
const affordable=products.find(p=>p.price<50000)
// console.log(affordable);

// reduce

const total= products.reduce((p,c)=>p+c.price,0)
console.log(total);

