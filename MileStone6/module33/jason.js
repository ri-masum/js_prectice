const shop={
    name:'multinational Indrustry',
    address:'dhaka,elephent road',
    owner:"masum",
    product:['laptop','janowor','keyboard','monitor','mouse'],
    revinew:34253,
    isopen:true,
    isNew:false
}
console.log(shop);
const stringify=JSON.stringify(shop);
console.log(stringify);
const turnIntoIntiger=JSON.parse(stringify);
console.log(turnIntoIntiger);