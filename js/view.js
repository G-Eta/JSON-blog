/* const postList = document.querySelector('#posts');
const url = 'https://jsonplaceholder.typicode.com/posts';

postBox = [];

const renderPosts = (dataArr) => {
    output = '';
  dataArr.forEach(post => {
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
        </div>`
  });
  
  postList.innerHTML = output;
} */




function viewSingle() {
    let mainBlog = localStorage.getItem('viewedPost')
    console.log(mainBlog);
    let post = JSON.parse(mainBlog)
    console.log(post)
    document.getElementById('post-id').innerHTML = post.id
    document.getElementById('post-title').innerHTML = post.title
    document.getElementById('post-body').innerHTML = post.body
}

viewSingle();