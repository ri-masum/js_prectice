
function bestFriend(array) {
    let largest = array[0];
    for (let i=0;i<array.length;i++) {
      const element = array[i];
      if (element > largest) {
        largest = element;
      //   console.log(largest);
      }
    }
    console.log(typeof largest);
  
    return largest
  }
  const array = ["sowrab", "tusher", "masum", "srabon", "rayat"];
  const result = bestFriend(array);
  console.log(result);
  