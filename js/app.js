let postWrapper = document.querySelector('#post-holder');
let postForm = document.querySelector('#post-form')
let title = document.querySelector('#title')
let body = document.querySelector('#body')



let postBox = [];

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            postBox = data
            renderUI(postBox)
        })
}

getPosts();

postForm.addEventListener('submit', createPost)


function createPost(e) {
    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            postBox.unshift(data);
            let postHolder = '';
            postBox.forEach(post => {
                postHolder += `
                <div class="col-md-4 mb-3">
                    <div class="card h-100 bg-secondary">
                        <div class="card-body text-white bg-secondary">
                            <p class="text-center">${post.id}</p>
                            <h6 class="post-title text-uppercase fw-bold text-center">${post.title}</h6>
                            <p class="post-body">${post.body}</p>
                        </div>
                        <div class="d-flex justify-content-between mx-2 my-2">
                            <button class="btn btn-dark" id="view-btn" onclick="openSingle(${post.id})">View</button>
                                <button class="btn btn-dark" onclick="updatePost(${post.id})">Update</button>
                                <button class="btn btn-dark" onclick="deletePost(${post.id})">Delete</button>
                        </div>
                    </div>
                </div>
            `
            });
            postWrapper.innerHTML = postHolder;
        })
}

function updatePost(id) {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            title: title.value,
            body: body.value,
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            let postTitles = document.querySelectorAll('.post-title')
            let postBodies = document.querySelectorAll('.post-body')
            postTitles.forEach((postTitle, index) => {
                if (index + 1 === id) {
                    if (data.title !== "") {
                        postTitle.innerHTML = data.title
                    }
                }

            })

            postBodies.forEach((postBody, index) => {
                if (index + 1 === id) {
                    if (data.body !== "") {
                        postBody.innerHTML = data.body
                    }
                }

            })

        });
}


function openSingle(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('viewedPost', JSON.stringify(data))
            window.location.href = 'view.html'
        });
}

function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            postBox = postBox.filter(post => post.id !== id)
            renderUI(postBox)  
        })

}

function renderUI (arr) {
    let postHolder = '';
            arr.forEach(post => {
                postHolder += `
                    <div class="col-md-4 mb-3">
                        <div class="card h-100 bg-secondary">
                            <div class="card-body text-white bg-secondary">
                                <p class = "text-center">${post.id}</p>
                                <h6 class="post-title text-uppercase fw-bold text-center">${post.title}</h6>
                                <p class="post-body">${post.body}</p>
                               
                            </div>
                            <div class="d-flex justify-content-between mx-2 my-2">
                                <button class="btn btn-dark" id="view-btn" onclick="openSingle(${post.id})">View</button>
                                <button class="btn btn-dark" onclick="updatePost(${post.id})">Update</button>
                                <button class="btn btn-dark" onclick="deletePost(${post.id})">Delete</button>
                            </div>
                        </div>
                    </div>
                `
            });
            postWrapper.innerHTML = postHolder;

}