const chai = require( 'chai' );
const expect = chai.expect;
describe( 'chai test', () => {
  it( 'shhould compare some values', () => {
    expect( 1 ).to.equal( 1 );
  } );
  it( 'should compare some staff', () => {
    expect( {
      name: 'asd'
      // 要用deep equal
    } ).to.deep.equal( {
      name: 'asd'
    } );
    expect( {
      name: 'asd'
      // 要用deep equal
    } ).to.have.property( 'name' ).to.equal( 'asd' );

    expect( 5 > 8 ).to.be.false;
    expect( {} ).to.be.a( 'object' );
    expect( 'foo' ).to.be.a( 'string' );
    expect( 3 ).to.be.a( 'number' );
    expect( 'bar' ).to.be.a( 'string' ).with.lengthOf( 3 );
    expect( [ 1, 2, 3 ].length ).to.equal( 3 );
    expect( null ).to.be.null;
    expect( undefined ).to.not.exist;
    expect( 1 ).to.exist;

  } );
} );
// 針對資料表來測試
// mocha ./Basic-JavaScript-2018/Chai_test.js