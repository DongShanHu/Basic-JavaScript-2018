const assert = require( 'assert' );

describe( 'file to be tested', () => {
  context( 'function to be tested', () => {
    before( () => {
      console.log( '==========before' );
    } );
    after( () => {
      console.log( '==========after' );
    } );
    beforeEach( () => {
      console.log( '--------beforeEach' );
    } );
    afterEach( () => {
      console.log( '--------afterEach' );
    } );
    it( 'should do something', () => {
      assert.equal( 1, 1 );
      console.log( "ENV", process.env.NODE_ENV );
      if ( process.env.NODE_ENV == 'development' ) {
        console.log( 'Development Mode' )
      }
    } );
    // TEST STRING
    it( 'should do something else', () => {
      assert.deepEqual( {
        name: 'kyle'
      }, {
        name: 'kyle'
      } );
      it( 'this is pendding test' );
    } );
  } );
} );


// mocha <filename>  in command line