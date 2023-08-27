function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>showData(data))
}

function showData(posts){

    const output=document.getElementById('post-container');
    for(const post of posts ){

    const divContainer=document.createElement('div')        
    divContainer.innerHTML=`
    <h4>User- ${post.userId}</h4>
    <h5>Title:${post.title}</h5>
    <p>Description:${post.body}</p>
    `
    output.appendChild(divContainer)

    }

}

loadData()
