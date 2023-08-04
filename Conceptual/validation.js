function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "please give two numbers only ";
  }
  return a + b;
}
// console.log(add(3,"5"));

// array number find and array validation check
function findSum(arr) {
  if (!Array.isArray(arr)) {
    return "please provide and array ";
  }

  let sum = 0;
  for (let i of arr) {
    sum += 1;
  }
  return sum;
}

const x = [30, 23, 32, 43, 45, 45];

// console.log(findSum(x));

// string er modde teke koto ta vowel and consonent ase check korbo

function vowelConsonentCheck(s) {
  let vowel = 0;
  let consonent = 0;
  let space = 0;
  for (let i = 0; i < s.length; i++) {
    //a e i o u
    let char = s[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowel++;
    } else if (char !== " ") {
      consonent++;
    } else {
      space++;
    }
    
    
  }
  let ovj = {
    vowelCount: vowel,
    consonentCount: consonent,
    spaceCount: space,
  };
  return ovj
}
const sentence =
  "my name is masum ahemd and ami eikan teke check korbo vowel and consonent ";
console.log(vowelConsonentCheck(sentence));
