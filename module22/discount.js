/**
 * ticket quantity less than 100 price is 100 taka
 * ticket quantity more than 100 and less tahn 200 then first 100 ticket  price is 100 taka and rest 100 will be 90 taka
 * ticket quantity more than 200  first 100 ticket  price is 100 taka and rest 100 will be 90 taka,then rest will be 80 taka

 */
function ticketPrice(ticketQuantity) {
  const first100Rate = 100;
  const second100Rate = 90;
  const restTicketRate = 80;

  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100Rate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const price = first100Price + restTicketPrice;
    return price;
  } else if (ticketQuantity > 200) {
    const first100Price = 100 * first100Rate;
    const second100Price = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const price = first100Price + second100Price + restTicketPrice;
    return price;
  }
}

const totalPrice = ticketPrice(202);
// console.log("price: ", totalPrice);
console.log('A big big big big big Fuck you');
