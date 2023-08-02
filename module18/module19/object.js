var shopingChart={
    books:2,
    sunglass:5,
    keyboard:8,
    mouse:90,
    pen:59

}

// when we know the specific  property name use dot notation to get the property value
console.log(shopingChart.mouse);
var penCount=shopingChart.pen;
// alternative system
// when we know the specific  property name use dot notation to get the property value
var penCount2=shopingChart['pen'];
var properties=Object.keys(shopingChart);
// console.log(properties);
var propertyValue=Object.values(shopingChart);
// console.log(propertyValue);
// we can change the object key value 
shopingChart.mouse=5;
// again changing 
shopingChart['mouse']=80;
// console.log(shopingChart);
for(var i=0;i<properties.length;i++){
    var propertyName=properties[i];
    var propertyValue=shopingChart[propertyName];

    // console.log(propertyName,propertyValue);
}
for(propertyName in shopingChart){
    const value=shopingChart[propertyName];
    console.log(propertyName,value);
}

function movie(){
    return "Din-The day";
    return "Poran";
    return "Hawa";
   }
   console.log(movie());