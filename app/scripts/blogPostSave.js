import $ from 'jquery';
import Backbone from 'backbone';
import $form from './form';
import Post from '../models/post';
// import router from './router';

// a) Create a form that saves a blog post to tiny-za-server. The post should have a title and a body. It does not need to display blog posts, just save them.
function save() {

    let $blog = $(`<form class="form" action="index.html" method="post">
    <input class="title" type="text" name="name" value="title">
    <input class="body" type="text" name="name" value="body">
    <input type="button" name="name" value="Save"></form>`);

    $('.container').empty().append($blog);



    $blog.find('input[type="button"]').on('click', function(evt) {
        evt.preventDefault();
        let post = new Post({
            title: $('.title').val(),
            body: $('.body').val()
        });
        post.save(null, {
            success: function(response) {
// posts needs to be the # location i want it to go
                router.navigate('posts', {
                    trigger: true
                });
            }
        });
    });
}

export default save;
// export default Post;
