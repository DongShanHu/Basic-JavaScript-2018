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

function createPost( post ) {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      posts.push( post );

      const error = false;

      if ( !error ) {
        resolve();
        //發生錯誤
      } else {
        reject( 'Error: Something went wrong' );
      }
    }, 2000 );
  } );
}
// createPost( {
//     title: 'Post Three',
//     body: 'This is post three'
//   } )
//   .then( getPosts )
//   .catch( err => console.log( err ) );


// Promise.all method 
const promise1 = Promise.resolve( 'Hello World' );
const promise2 = 280;
const promise3 = new Promise( ( resolve, reject ) =>
  setTimeout( resolve, 1000, 'OH NO!!!' )
);
//use promise to fetch an api which is  make ajax from http
// const promise4 = fetch( 'https://jsonplaceholder.typicode.com/users' );

//.then( res =>res.json()) 將data parser to json  

const promise4 = fetch( 'https://jsonplaceholder.typicode.com/users' ).then( res =>
  res.json()
);

Promise.all( [ promise1, promise2, promise3, promise4 ] ).then( values =>
  console.log( values )
);