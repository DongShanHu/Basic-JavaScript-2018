const posts = [ {
    title: 'Post One',
    body: 'This is post one'
  },
  {
    title: 'Post Two',
    body: 'This is post two'
  }
];

// setTimeout  takes in a callback function
function getPosts() {
  // setTimeout( function (){})   not Es6 style
  setTimeout( () => {
    let output = '';
    //forEach function to show post
    posts.forEach( ( post, index ) => {
      //use template syntax template literal
      output += `<li>${post.title}</li>`;
    } );
    //output that on the page 
    document.body.innerHTML = output;
  }, 1000 );
}
//callback的重要
function createPost( post, callback ) {
  // setTimeout( function (){})
  setTimeout( () => {
    //push a new post
    posts.push( post );
    callback();
  }, 2000 );
}
//假設沒有用callback function 兩秒的create永遠出不來 因為一秒的dom已經建置好了
// getPosts();
// createPost( {
//   title: 'Post Three',
//   body: 'This is post three'
// } );

createPost( {
  title: 'Post Three',
  body: 'This is post three'
}, getPosts );