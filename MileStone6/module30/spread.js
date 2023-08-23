const friends=[1,2,3,4,5,6]
const bondu=friends;
friends.push(7);
// console.log(friends);
// console.log(bondu);

/**uporer moto korle bondu tew push hocce and friends a o push hocce 
 * so ei teke bacar upay holo spread oparator use kore so lets do that
 */

const dosto=[...friends,87]//the ... will copy the friends elements
dosto.push(100)
console.log(dosto);
console.log(friends);
