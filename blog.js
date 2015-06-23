// author
// blogName
// Posts
//   _timestamp
//   title
//   tags
//   content
//   status (published / not published)
// #Posts
//   .editPost()
//   .addTags()
// #blog
//   .getBlogName()
//   .editBlogName()
//   .getAuthor()
//   .editAuthor()
//   .getPosts()
//   .createPost()
//   .deletePost()
// var form = document.createElement('form');
// document.body.appendChild(form);

var input = document.createElement("input");
// input.innerHTML = "Submit";
document.body.appendChild(input);

var button = document.createElement('button');
button.innerHTML = "Smexy";
document.body.appendChild(button);


function blogFactory(settings){
  var author = settings.author;
  var blogName = settings.blogName;
  var posts = [];
  var blog = {
    getAuthor: _getAuthor,
    editAuthor: _editAuthor,
    getBlogName: _getBlogName,
    editBlogName: _editBlogName,
    createPosts: _createPosts

    // noDeleteAuthorName: _noDeleteAuthorName
  };
  return blog;

  function _getAuthor(){
    return author;
  }

  function _editAuthor(newAuthorName){
    author = newAuthorName;
  }

  function _getBlogName(){
    return blogName;
  }

  function _editBlogName(newBlogName){
    blogName = newBlogName;
  }

  function _createPosts(){
    var post = postFactory(settings);

  }

  function postFactory(settings){
      var postTitle = settings.title;
      var posts = {
        getPostTitle: _getPostTitle,
      };
      return posts;

      function _getPostTitle(){

      }
    }
  // function _noDeleteAuthorName(){
  //   if (author === "") {
  //     alert ("You must have a name!");
  //   }
  // }

}