const phone = [
  {
    name: "apple",
    camera: "12MP",
    Storage: "128Gb",
    price : 100000,
    color: "solver",
  },
  {
    name: "samsung",
    camera: "10MP",
    Storage: "128Gb",
    price : 50000,
    color: "solver",
  },
  {
    name: "nokia",
    camera: "10MP",
    Storage: "128Gb",
    price : 20000,
    color: "solver",
  },
  {
    name: "xiomi",
    camera: "12MP",
    Storage: "128Gb",
    price : 300000,
    color: "solver",
  },
  {
    name: "nothing",
    camera: "22MP",
    Storage: "256Gb",
    price : 7000,
    color: "solver",
  },
];

function cheapPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];

    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }

return cheapest
}


const result=cheapPhone(phone);
console.log('cheapest phone avilable is : \n ' ,result);
