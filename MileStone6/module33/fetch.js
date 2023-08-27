// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



function loadData(){
    const url='https://jsonplaceholder.typicode.com/todos/1'
    fetch(url)
    .then(response =>response.json)
    .then(json=>console.log(json))

}

function loadData1()
{

    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayData(data))
}



function loadData2(){
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>showName(data))
}
function showName(data){

for(const user of data){
   const ul=document.getElementById('listName')
    const li=document.createElement('li')
    li.innerText=user.username;
    ul.appendChild(li)
}
}