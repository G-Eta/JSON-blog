
function viewSingle() {
    let mainBlog = localStorage.getItem('viewedPost')
    let post = JSON.parse(mainBlog)
    document.getElementById('post-id').innerHTML = post.id
    document.getElementById('post-title').innerHTML = post.title
    document.getElementById('post-body').innerHTML = post.body
}

viewSingle();
