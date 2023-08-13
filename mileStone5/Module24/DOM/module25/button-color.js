

// option 1
function makeBlue(){
    document.body.style.backgroundColor='blue';
}
// option two 
const makeYellow=document.getElementById('yellow');
makeYellow.onclick=yellow;
function yellow(){
    document.body.style.backgroundColor='yellow';
    
}
// option three
function white(){
    document.body.style.backgroundColor='white';
}

// option four
const pinkBtn=document.getElementById('pink');

pinkBtn.addEventListener('click',makePink);
function makePink(){
   document.body.style.backgroundColor='pink';
}
// option five
 
const greenBtn=document.getElementById('green');

greenBtn.addEventListener('click',function makeGreen(){
   document.body.style.backgroundColor='green';
})

// option six and we will use this often 
document.getElementById('goldenRod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenrod';
})



// leka change korar 
      // option one
      function changeText() {
        const text = document.getElementById("default");

        console.log("click oise ");
        text.innerText = "masum ami u don know me right but you will some day";
      }
    //   option two 
      document.getElementById('eventListener').addEventListener('click',function(){
        const anotehrText=document.getElementById('default');
        anotehrText.innerText='abr ami leka change kore dilam '
      })