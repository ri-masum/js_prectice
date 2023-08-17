document.getElementById("btn").addEventListener("click", function () {
  // get the actual price
  const actualPrice = getDiscount("actualPrice");

  // get the section where we will show the discount price

  const input=document.getElementById('input');
  const inputValue=input.value;
  
  if(inputValue=='Disc'){

    const discountValue = actualPrice * 0.7;
    const output = setValue("discountPrice", discountValue);
  
  
  }
  else{
    console.log('coupne code not allowd');
  }


});

function getDiscount(priceId) {
  const actualPrice = document.getElementById(priceId);
  const actualPriceValueString = actualPrice.innerText;
  const actualPriceValue = parseFloat(actualPriceValueString);
  return actualPriceValue;
}

function setValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
