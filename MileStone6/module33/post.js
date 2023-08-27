function loadData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => showData(data));
}

function showData(posts) {
  const output = document.getElementById("post-container");
  for (const post of posts) {
    const divContainer = document.createElement("div");
    divContainer.classList.add("post");
    divContainer.innerHTML = `
    <h4>User- ${post.userId}</h4>
    <h5>Title:${post.title}</h5>
    <p>Description:${post.body}</p>
    `;
    output.appendChild(divContainer);
  }
}

loadData();

function deleteApost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });
}

function updateApost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function patchApost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    body: JSON.stringify({
      title: "foo",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
