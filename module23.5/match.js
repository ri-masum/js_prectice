const products=[

    {id:1, name:"samsung phone",price:1000000},
    {id:2, name:"apple phone",price:1000000},
    {id:3, name:"linux laptop",price:1000000},
    {id:4, name:"mac LapTOp",price:1000000},
    {id:5, name:"windows phone",price:1000000},
    {id:6, name:"windows laptoP",price:1000000},
    {id:7, name:"realme phone",price:1000000},
    {id:8, name:"realm name of  phone",price:1000000},
    {id:9, name:"retruder laPtoP",price:1000000},
];

function match(products,scearch){
    const metchOne=[];

    for(const product of products){
        if(product.name.toLowerCase().includes(scearch.toLowerCase())){ //we can scarch a item in the string by using includes and here i use toLoweCase().

            metchOne.push(product);
        };
        

    }
    return metchOne;
}
const result=match(products,'pHoNe');
console.log(result);