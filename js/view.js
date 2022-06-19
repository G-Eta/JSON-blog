




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