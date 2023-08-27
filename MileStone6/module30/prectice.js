// prectice one
const multiply = (a, b, c) => a * b * c;
const mult = multiply(23, 4, 3);
//  console.log(mult);

// prectice two

const string = `I am a web developer.
I love to code.
I lvoe to eat biriyani`;
// console.log(string);

// problem 3

function add(a, b = 0) {
  const adding = a + b;
  //  console.log(a+ ' '+b,adding);
}
const result = add(3);

// problem 4
let even = [];
const one = (friends) => {
  for (const name of friends) {
    if (name.length % 2 === 0) {
      even.push(name);
    }
  }
  return;
};
const listFriends = ["masum", "sowrab", "tusher", "rahat", "manna"];

const evenFriendsNames = one(listFriends);
// console.log(even);

// problems 5
const numbers = [1, 2, 3, 4, 5, 6];

const squreFunction = (numbers) => {
  const squre = numbers.map((e) => e * e);
  let sum = 0;

  const n = squre.length;
  //   console.log(n);
  for (let number in squre) {
    sum += squre[number];
  }
  return sum / n;
};
const output = squreFunction(numbers);
// console.log(output);

// problem 5

const twoArray = (one, two) => {
  const combine = [...one,...two];

  const max = Math.max(...combine);
  return max;
};
const first = [1, 2, 3, 4, 5];
const second = [6, 100, 8, 9, 10];

const combineResult = twoArray(first, second);
console.log(combineResult);
