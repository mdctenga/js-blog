/****Check if Browser or CLI****/
var window = window || undefined;

if (window) {
  GLOBAL = window;
} else {
  var fs = require('fs');
  var vm = require('vm');
  var chai = require('chai');
  var functionsFile = fs.readFileSync(process.cwd() + '/blog.js');
  vm.runInThisContext(functionsFile); // file runs and it's contents has access to GLOBAL
}
/*******************************/
var expect = chai.expect;
var should = chai.should();

var blogFactory = GLOBAL.blogFactory;

describe("#blogFactory", function() {

  var blog1, blog2;

  beforeEach (function () {
    blog1 = blogFactory({
      author: "Matt",
      blogName: "Tengamer"
    });

    blog2 = blogFactory({
      author: "Anonymous",
      blogName: "Anonymous Blog"
    });
  });

  it('should be a function', function () {
    expect(blogFactory).to.exist;
    expect(blogFactory).to.be.an('function');
  });

  it('should have an author', function () {
    expect(blog1.getAuthor).to.be.an('function');
    expect(blog1.getAuthor()).to.equal('Matt');
    expect(blog2.getAuthor()).to.equal('Anonymous');
  });

  it('should be able to edit author', function() {
    expect(blog1.editAuthor).to.be.a('function');

    blog1.editAuthor('Vai');
    expect(blog1.getAuthor()).to.equal('Vai');
    expect(blog2.getAuthor()).to.equal('Anonymous');
    blog2.editAuthor('BomberMan');
    expect(blog2.getAuthor()).to.equal('BomberMan');
  });

  // it('should not let you delete the author\'s name', function() {
  //   blog1.editAuthor('');
  //   expect(blog1.getAuthor()).to.equal('Matt');
  //   blog2.editAuthor('');
  //   expect(blog2.getAuthor()).to.equal('Anonymous');
  // });

  it('should have a blog name', function() {
    expect(blog1.getBlogName).to.be.a('function');
    expect(blog1.getBlogName()).to.equal('Tengamer');
    expect(blog2.getBlogName()).to.equal('Anonymous Blog');
  });

  it('should be able to edit blog name', function() {
    expect(blog1.editBlogName).to.be.a('function');

    blog1.editBlogName('Tengamer');
    expect(blog1.getBlogName()).to.equal('Tengamer');
    expect(blog2.getBlogName()).to.equal('Anonymous Blog');
    blog2.editBlogName('Some other name');
    expect(blog2.getBlogName()).to.equal('Some other name');
    
  });
  
  describe("#postFactory", function() {

    var post1, post2;

    beforeEach (function () {
      post1 = {
        postTitle: "Title Numbah 1",
        tags: ["Choco", "Cats"],
        content: "content is much orig",
      };

      post2 = {
        postTitle: "Title Numbah 2",
        tags: ["Apple", "Banaynay"],
        content: "content is much more arig",
      };
    });

    it('should be able to create posts', function() {
      expect(blog1.createPost).to.be.a('function');
      var post = blog1.createPost(post1);
      expect(post).to.exist;
      expect(post.postTitle).to.equal(post1.postTitle);
      expect(post.tags).to.equal(post1.tags);
      expect(post.content).to.equal(post1.content);
      expect(post.status).to.exist;
      expect(post.timestamp).to.exist;
    });

    it.skip('should be able to get posts', function() {
      expect(post1.getPosts).to.be.a('function');

      expect(post1.getPosts()).to.equal("Fancy Post");
      expect(post2.getPosts()).to.equal("Fancier Post");
    });



    it.skip('should be able to delete posts', function() {
      expect(blog1.deletePost).to.be.a('function');
    });
  });

});




// describe("blogFactory", function() {
 
//  var blog1, blog2;

//   beforeEach(function(){
//     blog1 = blogFactory({
//       author: "Matt",
//       blogName: "Tengamer",
//     });

//     blog2 = blogFactory({
//       author: "Anonymous",
//       blogName: "Anonymous Blog",
//     });
//   })

//   it('should be a function', function () {
//     expect(blogFactory).to.exist;
//     expect(blogFactory).to.be.an('function');
//   });

//   it('should have an author', function () {
//     expect(blog1.getAuthor).to.be.an('function');
//     expect(blog1.getAuthor()).to.equal("Matt");
//     expect(blog2.getAuthor()).to.equal("Anonymous");

//   it('should be able to edit author name', function() {
//     expect(blog1.editAuthor).to.be.a('function');

//     blog1.editAuthor('Jason');

//   })

//   it('should be able to edit blog name', function () {
//     expect(blog1.getBlogName).to.be.a('function');
//   })

//   it('should be able to e')

//   });
// });
