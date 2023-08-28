const loadPhone = async (scarchText,isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${scarchText}`
  );
  const data = await res.json();
  const phones = data.data;
  // console.log(phones);
  displayPhone(phones,isShowAll);
};

const displayPhone = (phones,isShowAll) => {
//    console.log(phones);


// step:1 get the div container
const phoneContainer=document.getElementById('phone-container');
// making the display empty after another scarch
phoneContainer.textContent=''

// condition jodi result 13 er besi take
const showAllContainer=document.getElementById('show-all-container')
if(phones.length>13 && !isShowAll){
showAllContainer.classList.remove('hidden')
}
else{
    showAllContainer.classList.add('hidden')
}
// console.log('is show all',isShowAll);


// displaying some of the phone
if(!isShowAll){
  phones=phones.slice(0,13)
}

  phones.forEach((phone) => {
    // console.log(phone);
    //step:2 create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList=`card card-compact w-96 bg-gray-300 shadow-xl p-5 rounded-lg `
    // step 3: set inner html
    phoneCard.innerHTML = `

    <figure><img src="${phone.image}" alt="Phone Image" /></figure>
    <div class="card-body">
      <h2 class="card-title">${phone.phone_name}</h2>
      <p>This is a high quality phone which container lots of featur</p>
      <div class="card-actions justify-center">
        <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
      </div>
    </div>
    `;
    // step 4: appendChild
    phoneContainer.appendChild(phoneCard)
  });

//   hide loading spiner
spinner(false)


};
const handleShowDetails=async (id)=>{

  // console.log('phone model',id);
  const res=await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data=await res.json();
  const phone=data.data;


  showPhoneDetails(phone);


}


// display modal
const showPhoneDetails=(phone)=>{
  showDetails.showModal()
  
  console.log(phone);
  const showDetailsContainer=document.getElementById('show-details-container');
  showDetailsContainer.innerHTML=`
    <img src="${phone.image}" alt=""/>
    <h1><b>${phone.name}</b></h1>
    <p><b>Storage:</b> ${phone?.mainFeatures?.storage}</p>
    <p><b>DisplaySize:</b> ${phone?.mainFeatures?.displaySize}</p>
    <p><b>ChipSet:</b> ${phone?.mainFeatures?.chipSet}</p>
    <p><b>Memory:</b> ${phone?.mainFeatures?.memory}</p>
    <p><b>Slug:</b> ${phone?.slug}</p>
    <p><b>Release Date:</b> ${phone?.releaseDate}</p>
    <p><b>Brand:</b> ${phone?.brand}</p>
    <p><b>GPS:</b> ${phone?.others?.GPS}</p>


  
  `
}




// scarch button handler

const handleScarch=(isShowAll)=>{

    spinner(true)
    const scarchField=document.getElementById('scarch-field');
    
    const scarchText=scarchField.value;

    loadPhone(scarchText,isShowAll)



}
const spinner=(isLoading)=>{
    const loadingSpiner=document.getElementById('spinner');
   if(isLoading){
loadingSpiner.classList.remove('hidden')
   }
   else{
    loadingSpiner.classList.add('hidden')
   }
   
    

}


// handle for show all button

const handleShowAll=()=>{
  handleScarch(true);

}
loadPhone();
