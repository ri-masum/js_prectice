
// find the largest number of an array
function largest(num) {
  let large = num[0];

  for (let i = 1; i < num.length; i++) {
    const currentItem=num[i];
    if (currentItem > large) {
        large=currentItem;
    }
  }
  return large;
}

const numbers = [3, 5, 2, 8, 10, 90, 87, 67, 66, 66.5, 90.5, 5];
// console.log(largest(numbers));

function bigestFriend(arr){
    let large=arr[0];
    for(let i =1;i<arr.length;i++)
    {
        const currentItem=arr[i];
        if(currentItem>large){
            large=currentItem;
        }


    }
    return large
}

const names=['masum','rahat','siddekay','tusherrahamn'];
console.log(bigestFriend(names));