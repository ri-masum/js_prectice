document.getElementById('post').addEventListener('click',function(){

    const commentBox=document.getElementById('comment-add');
    const newComment=commentBox.value;

    const commentContainer=document.getElementById('content-container');
    const p=document.createElement('p');
    p.innerText=newComment;
    commentContainer.appendChild(p);

    commentBox.value=''
})